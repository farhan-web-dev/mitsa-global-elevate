import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, ListFilter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { categories, products } from "@/data/products";
// import productsBg from "@/assets/products-bg.png";

const ITEMS_PER_PAGE = 8;

const Products = () => {
  const { hash } = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // If arriving with a hash, try to match it to a category
    if (hash) {
      const catId = hash.replace("#", "");
      if (categories.some((c) => c.id === catId)) {
        setSelectedCategory(catId);
        setCurrentPage(1);
      }
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  // Handle category change
  const handleCategoryChange = (val: string) => {
    setSelectedCategory(val);
    setCurrentPage(1); // Reset to page 1 on filter change
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  // Filter products
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.categoryId === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="pt-28 pb-16 border-b border-border bg-cover bg-center bg-no-repeat relative"
        // style={{ backgroundImage: `url(${productsBg})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Our Products
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore our comprehensive range of premium products designed for
            businesses and commercial environments.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl flex flex-col md:flex-row gap-8 items-start">
        {/* Sidebar / Filters */}
        <div className="w-full md:w-64 shrink-0 top-24 md:sticky space-y-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 font-bold text-lg mb-4 pb-4 border-b border-border">
              <ListFilter className="w-5 h-5 text-primary" />
              Categories
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleCategoryChange("all")}
                className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === "all"
                    ? "bg-primary text-primary-foreground font-medium"
                    : "hover:bg-accent text-foreground"
                }`}
              >
                All Products
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleCategoryChange(c.id)}
                  className={`flex items-center gap-3 text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === c.id
                      ? "bg-primary text-primary-foreground font-medium"
                      : "hover:bg-accent text-foreground"
                  }`}
                >
                  <c.icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{c.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 w-full min-w-0">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> results
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-card rounded-2xl border border-border">
              <p className="text-muted-foreground">No products found for this category.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedProducts.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="bg-card border border-border rounded-xl overflow-hidden card-hover flex flex-col h-full"
                  >
                    <div className="aspect-square w-full overflow-hidden bg-muted relative">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 bg-background/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded-md text-foreground">
                        {categories.find((c) => c.id === p.categoryId)?.name}
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-bold text-foreground mb-1 line-clamp-2">
                        {p.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-auto">
                        {p.specs}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex flex-wrap items-center justify-center gap-2 mt-12 bg-card p-3 rounded-3xl border border-border w-fit max-w-full mx-auto shadow-sm">
                  <button
                    onClick={() => {
                      setCurrentPage(p => Math.max(1, p - 1));
                      window.scrollTo({ top: 300, behavior: "smooth" });
                    }}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full hover:bg-accent text-foreground disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <div className="flex flex-wrap items-center justify-center gap-1">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setCurrentPage(i + 1);
                          window.scrollTo({ top: 300, behavior: "smooth" });
                        }}
                        className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${
                          currentPage === i + 1
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "hover:bg-accent text-foreground"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setCurrentPage(p => Math.min(totalPages, p + 1));
                      window.scrollTo({ top: 300, behavior: "smooth" });
                    }}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full hover:bg-accent text-foreground disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Products;
