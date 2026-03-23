import { Phone, Mail, Globe } from "lucide-react";
import logo from "@/assets/mitsa-logo-transparent.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow mx-auto section-padding pb-8">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <img src={logo} alt="MITSA Global" className="h-20 mb-4 rounded bg-primary-foreground p-1" />
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Elevate Your Business to New Heights. Your trusted partner for commercial supplies in the UAE.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "About", "Products", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                {l === "Home" ? "Home" : l}
              </a>
            ))}
          </div>
        </div>

        {/* Product Categories */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Products</h4>
          <div className="space-y-2">
            {["Aromatic Products", "Air Fresheners", "Paper Products", "Cleaning & Hygiene", "Refreshments"].map((p) => (
              <a key={p} href="#products" className="block text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                {p}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Contact</h4>
          <div className="space-y-3">
            <a href="tel:+971588102255" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              <Phone className="w-4 h-4" /> +971 58 810 2255
            </a>
            <a href="mailto:mitsaglobal@gmail.com" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              <Mail className="w-4 h-4" /> mitsaglobal@gmail.com
            </a>
            <a href="https://www.mitsaglobal.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              <Globe className="w-4 h-4" /> www.mitsaglobal.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} MITSA Global General Trading L.L.C — S.P.C. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
