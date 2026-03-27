import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/mitsa-logo-transparent.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  // { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Products", href: "#products" },
  // { label: "Why Us", href: "#why-us" },
  // { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
   <nav
  className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200"
>
      <div className="container-narrow mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20 bg-white">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt="MITSA Global" className="h-16 md:h-28 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
          <a
  key={l.href}
  href={l.href}
  className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200"
>
  {l.label}
</a>
          ))}
          <a
            href="/MITSA_GLOBAL_PRODUCT_CATALOGUE.pdf"
            download
            className="btn-secondary text-sm px-5 py-2"
          >
            Download Catalogue
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="text-gray-700 hover:text-green-600 transition-colors duration-200" />
          ) : (
            <Menu className="text-gray-700 hover:text-green-600 transition-colors duration-200" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card shadow-xl border-t border-border animate-fade-in">
          <div className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/MITSA_GLOBAL_PRODUCT_CATALOGUE.pdf"
              download
              className="btn-secondary text-sm text-center mt-2"
            >
              Download Catalogue
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
