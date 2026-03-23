import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, FileDown } from "lucide-react";

const CatalogueSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-section-alt" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-navy-light rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
              <FileDown className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-2">
                Download Our Full Catalogue
              </h3>
              <p className="text-primary-foreground/70">
                Browse our complete product range with specifications and pricing.
              </p>
            </div>
          </div>
          <a
            href="/MITSA_GLOBAL_PRODUCT_CATALOGUE.pdf"
            download
            className="btn-secondary flex items-center gap-2 whitespace-nowrap"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CatalogueSection;
