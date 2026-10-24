import { Resend } from "resend";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(30).regex(/^[+\d\s().-]+$/).refine(value => { const digits = value.replace(/\D/g, "").length; return digits >= 7 && digits <= 15; }),
  email: z.string().trim().email().max(254),
  suburb: z.string().trim().min(2).max(100),
  service: z.string().min(1).max(60),
  colour: z.string().max(60).optional(),
  details: z.string().trim().min(10).max(3000),
});
const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

export async function POST(request: Request) {
  const form = await request.formData();
  const parsed = quoteSchema.safeParse(Object.fromEntries(["name", "phone", "email", "suburb", "service", "colour", "details"].map(key => [key, form.get(key) ?? ""])));
  if (!parsed.success) return Response.json({ error: "Please check your details and try again." }, { status: 400 });

  const uploads = form.getAll("photos").filter((entry): entry is File => entry instanceof File && entry.size > 0);
  if (uploads.length > 4 || uploads.some(file => !allowedTypes.has(file.type) || file.size > 5 * 1024 * 1024)) {
    return Response.json({ error: "Photos must be JPG, PNG or WebP, up to 4 images and 5 MB each." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.QUOTE_TO_EMAIL || "avocado0908@gmail.com";
  const sender = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !recipient || !sender) return Response.json({ error: "Quote enquiries are not available just yet. Please contact the business directly." }, { status: 503 });

  const { name, phone, email, suburb, service, colour, details } = parsed.data;
  const attachments = await Promise.all(uploads.map(async file => ({ filename: file.name, content: Buffer.from(await file.arrayBuffer()).toString("base64") })));
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: sender,
    to: recipient,
    replyTo: email,
    subject: `Website enquiry: ${service} — ${name}`,
    text: `New JP Glass quote enquiry\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nSuburb: ${suburb}\nService: ${service}${colour ? `\nColour / finish: ${colour}` : ""}\n\nProject details:\n${details}`,
    attachments,
  });
  if (error) return Response.json({ error: "We couldn’t send your enquiry just now. Please try again later." }, { status: 502 });
  return Response.json({ ok: true });
}
