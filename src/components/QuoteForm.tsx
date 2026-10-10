"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight, CheckCircle2, LoaderCircle, Paperclip } from "lucide-react";

const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number.").max(30).regex(/^[+\d\s().-]+$/, "Enter a valid phone number.").refine(value => { const digits = value.replace(/\D/g, "").length; return digits >= 7 && digits <= 15; }, "Enter a valid phone number."),
  email: z.string().trim().email("Enter a valid email address.").max(254),
  suburb: z.string().trim().min(2, "Please enter your suburb.").max(100),
  service: z.string().min(1, "Choose a service.").max(60),
  details: z.string().trim().min(10, "Please add a little more detail (at least 10 characters).").max(3000),
});
type QuoteValues = z.infer<typeof quoteSchema>;
const services = ["Shower Boxes (Frameless & Sliding)", "Fence Glass", "Pool Fence Glass", "Handrails", "Custom Stairs Glass", "Outside Base & Glass", "Other"];

export default function QuoteForm() {
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<QuoteValues>({ resolver: zodResolver(quoteSchema) });

  async function submit(values: QuoteValues) {
    setMessage(null);
    const data = new FormData();
    Object.entries(values).forEach(([key, value]) => data.set(key, value));
    files.forEach(file => data.append("photos", file));
    try {
      const response = await fetch("/api/contact", { method: "POST", body: data });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Something went wrong. Please try again.");
      setMessage({ type: "success", text: "Thanks — your enquiry has been sent. We’ll be in touch." });
      reset();
      setFiles([]);
    } catch (error) {
      setMessage({ type: "error", text: error instanceof Error ? error.message : "Unable to send your enquiry. Please try again." });
    }
  }

  return <form id="quote-form" className="quote-form" onSubmit={handleSubmit(submit)} noValidate>
    <div className="form-grid">
      <Field label="Full name" error={errors.name?.message}><input autoComplete="name" placeholder="Your name" {...register("name")}/></Field>
      <Field label="Phone" error={errors.phone?.message}><input type="tel" autoComplete="tel" placeholder="021 000 0000" {...register("phone")}/></Field>
      <Field label="Email" error={errors.email?.message}><input type="email" autoComplete="email" placeholder="you@example.com" {...register("email")}/></Field>
      <Field label="Suburb" error={errors.suburb?.message}><input autoComplete="address-level2" placeholder="Where is your project?" {...register("suburb")}/></Field>
      <Field label="Service" error={errors.service?.message}><select defaultValue="" {...register("service")}><option value="" disabled>Select a service</option>{services.map(service => <option key={service}>{service}</option>)}</select></Field>
      <div className="field"><label htmlFor="photos">Project photos <span>(optional)</span></label><label className="file-picker" htmlFor="photos"><Paperclip size={16}/><span>{files.length ? `${files.length} photo${files.length === 1 ? "" : "s"} selected` : "Add photos (up to 4, 5 MB each)"}</span></label><input id="photos" type="file" accept="image/jpeg,image/png,image/webp" multiple className="sr-only" onChange={event => { const chosen = Array.from(event.target.files ?? []); if (chosen.length > 4 || chosen.some(file => file.size > 5 * 1024 * 1024)) { setMessage({ type: "error", text: "Choose up to 4 images, each smaller than 5 MB." }); event.target.value = ""; setFiles([]); } else { setMessage(null); setFiles(chosen); } }}/></div>
      <Field label="Project details" error={errors.details?.message} className="field-full"><textarea rows={5} placeholder="Tell us a little about what you have in mind…" {...register("details")}/></Field>
    </div>
    <div className="form-submit"><p>We’ll only use your details to respond to your enquiry.</p><button className="button button-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? <>Sending <LoaderCircle className="spin" size={17}/></> : <>Send enquiry <ArrowRight size={17}/></>}</button></div>
    {message && <p className={`form-message ${message.type}`} role="status">{message.type === "success" && <CheckCircle2 size={18}/ >}{message.text}</p>}
  </form>;
}

function Field({ label, error, className = "", children }: { label: string; error?: string; className?: string; children: React.ReactNode }) {
  const id = `field-${label.toLowerCase().replaceAll(" ", "-")}`;
  return <div className={`field ${className}`}><label htmlFor={id}>{label}<span> *</span></label>{React.cloneElement(children as React.ReactElement<{ id?: string; "aria-invalid"?: boolean; "aria-describedby"?: string }>, { id, "aria-invalid": Boolean(error), "aria-describedby": error ? `${id}-error` : undefined })}{error && <small className="field-error" id={`${id}-error`}>{error}</small>}</div>;
}
