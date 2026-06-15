import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCategories } from "@/hooks/useCatalog";

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { data: categories = [], isLoading } = useCategories();

  return (
    <section id="products" className="section-padding bg-section-alt" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Our Products</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Comprehensive Product Range
          </h2>
          <p className="text-muted-foreground text-lg">
            From aromatic solutions to cleaning equipment — everything your business needs.
          </p>
        </motion.div>

        {isLoading ? (
          <p className="text-center text-muted-foreground mb-10">Loading categories...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {categories.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to={`/products#${c.id}`}
                  className="group block bg-card rounded-2xl overflow-hidden border border-border card-hover h-full flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="bg-primary/90 p-2 rounded-lg shrink-0">
                        <c.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-bold text-primary-foreground leading-tight">{c.name}</h3>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-muted-foreground text-sm mb-3 flex-grow">{c.desc}</p>
                    <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                      View Products <ArrowRight className="w-4 h-4 shrink-0" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link to="/products" className="btn-primary inline-flex items-center gap-2">
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
