import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building, Hotel, UtensilsCrossed, ShoppingBag, Heart, Landmark } from "lucide-react";

const industries = [
  { icon: Building, name: "Offices" },
  { icon: Hotel, name: "Hotels" },
  { icon: UtensilsCrossed, name: "Restaurants" },
  { icon: ShoppingBag, name: "Shopping Malls" },
  { icon: Heart, name: "Hospitals" },
  { icon: Landmark, name: "Corporate Buildings" },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Industries Served</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Serving Diverse Industries
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide tailored solutions for a wide range of commercial sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 text-center border border-border card-hover group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/5 group-hover:bg-secondary/10 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <ind.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>
              <p className="font-semibold text-foreground text-sm">{ind.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
