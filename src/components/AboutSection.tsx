import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Award, Handshake } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To provide premium-quality products and comprehensive business solutions that enhance commercial environments and elevate customer experiences.",
  },
  {
    icon: Award,
    title: "Quality Commitment",
    desc: "Every product in our catalogue is selected for durability, performance, and value — ensuring your business operates at the highest standard.",
  },
  {
    icon: Handshake,
    title: "Business Solutions",
    desc: "From aromatic scenting to cleaning supplies, we deliver end-to-end solutions for offices, hotels, malls, restaurants, and corporate buildings.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
            Your Trusted Supply Partner
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            MITSA Global is a leading supplier and distributor of aromatic scent machines,
            air fresheners, paper products, cleaning tools, and refreshment items designed
            for businesses and commercial environments across the UAE.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 shadow-sm card-hover border border-border text-center"
            >
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                <v.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
