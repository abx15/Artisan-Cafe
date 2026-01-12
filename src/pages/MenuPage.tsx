import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import PageTransition from "@/components/layout/PageTransition";
import SectionTitle from "@/components/ui/SectionTitle";
import MenuCard from "@/components/ui/MenuCard";
import { menuData, categories, type CategorySlug } from "@/data/menuData";
import { ChevronLeft } from "lucide-react";

const MenuPage = () => {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<CategorySlug>(
    (category as CategorySlug) || ""
  );

  // Update filter when URL changes
  useEffect(() => {
    setActiveFilter((category as CategorySlug) || "");
  }, [category]);

  // Filter menu items
  const filteredItems = activeFilter
    ? menuData.filter((item) => item.category === activeFilter)
    : menuData;

  // Handle filter change with URL update
  const handleFilterChange = (slug: CategorySlug) => {
    setActiveFilter(slug);
    if (slug) {
      navigate(`/menu/${slug}`, { replace: true });
    } else {
      navigate("/menu", { replace: true });
    }
  };

  // Get page title based on category
  const getCategoryTitle = () => {
    if (!activeFilter) return "Our Menu";
    const cat = categories.find((c) => c.slug === activeFilter);
    return cat ? cat.name : "Our Menu";
  };

  return (
    <PageTransition>
      <main className="pt-24 pb-16 min-h-screen bg-background">
        {/* Hero Banner */}
        <section className="relative h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=400&fit=crop"
              alt="Menu banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cafe-espresso/90 via-cafe-espresso/70 to-transparent" />
          </div>

          <div className="relative w-full px-4 lg:px-8 h-full flex flex-col justify-center">
            {category && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-4"
              >
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <ChevronLeft size={20} />
                  <span className="text-sm">Back to Full Menu</span>
                </Link>
              </motion.div>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground"
            >
              {getCategoryTitle()}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-primary-foreground/80 text-lg mt-3 max-w-xl"
            >
              Discover our handcrafted selection of artisan delights
            </motion.p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border py-4">
          <div className="w-full px-4 lg:px-8">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => handleFilterChange(cat.slug as CategorySlug)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-full font-body text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeFilter === cat.slug
                      ? "bg-primary text-primary-foreground shadow-emerald"
                      : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {cat.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="w-full px-4 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filteredItems.length}
              </span>{" "}
              items
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((item, index) => (
                <MenuCard key={item.id} item={item} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No items found in this category.
              </p>
            </div>
          )}
        </section>
      </main>
    </PageTransition>
  );
};

export default MenuPage;
