import SectionHeading from "@/components/SectionHeading";

const values = [{ no: "01", title: "Quality workmanship", text: "Careful attention to the finish, the fit and the small details." }, { no: "02", title: "Made for your space", text: "Solutions shaped around your design, dimensions and requirements." }, { no: "03", title: "Professional installation", text: "A considered process from first conversation through to installation." }];
export default function WhyChooseUs() {
  return <section className="section values-section"><div className="wrap values-layout"><div className="values-intro"><SectionHeading eyebrow="The JP Glass approach" title="Good work is felt in the details." description="Every project starts with listening. From there, we focus on a clear process and a result that feels right at home."/><a href="/about" className="text-link">Get to know us <span aria-hidden="true">→</span></a></div><div className="values-list">{values.map(item => <article className="value-row" key={item.no}><span>{item.no}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="value-cross" aria-hidden="true">↗</span></article>)}</div></div></section>;
}
