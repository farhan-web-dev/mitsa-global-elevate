import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Truck, Building2, BadgeDollarSign, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Premium Quality", desc: "Rigorously selected products meeting international standards" },
  { icon: Truck, title: "Reliable Supply", desc: "Consistent stock availability and timely delivery across UAE" },
  { icon: Building2, title: "Commercial Solutions", desc: "Tailored packages for every commercial environment" },
  { icon: BadgeDollarSign, title: "Competitive Pricing", desc: "Best value without compromising on quality" },
  { icon: ThumbsUp, title: "Customer Satisfaction", desc: "Dedicated support and after-sales service" },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding bg-primary" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            The MITSA Global Advantage
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Trusted by businesses across the UAE for quality, reliability, and value.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-bold text-primary-foreground mb-2">{r.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
