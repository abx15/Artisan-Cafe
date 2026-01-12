import SectionTitle from "@/components/ui/SectionTitle";
import CategoryCard from "@/components/ui/CategoryCard";
import CafeButton from "@/components/ui/CafeButton";
import {
  CakeIcon,
  ChocolateIcon,
  NoodlesIcon,
  CoffeeCupIcon,
} from "@/components/icons/CafeIcons";

const categories = [
  {
    title: "Artisan Cakes",
    description:
      "From velvety red velvet to rich chocolate truffles — our cakes are baked fresh daily with premium ingredients and decorated with love. Perfect for celebrations or a sweet escape.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
    icon: <CakeIcon size={28} />,
    to: "/menu/cakes",
  },
  {
    title: "Premium Chocolates",
    description:
      "Indulge in our handcrafted Belgian chocolates, from silky dark truffles to salted caramel bonbons. Each piece is a small work of art, made with 72% pure cocoa.",
    image:
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&h=400&fit=crop",
    icon: <ChocolateIcon size={28} />,
    to: "/menu/chocolates",
  },
  {
    title: "Savory Chaumin",
    description:
      "Authentic Indo-Chinese noodles wok-tossed to perfection. From fiery Szechuan to creamy garlic butter — our chaumin brings the streets of Asia to your table.",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&h=400&fit=crop",
    icon: <NoodlesIcon size={28} />,
    to: "/menu/chaumin",
  },
  {
    title: "Signature Drinks",
    description:
      "Single-origin espresso, ceremonial matcha, artisanal lattes — our drinks are crafted by expert baristas using beans roasted in-house for the perfect cup.",
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&h=400&fit=crop",
    icon: <CoffeeCupIcon size={28} />,
    to: "/menu/drinks",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-24 bg-background">
      <div className="w-full px-4 lg:px-8">
        <SectionTitle title="Our Specialties" subtitle="What We Offer">
          Explore our carefully curated selection of artisan treats. Each
          category represents years of perfecting recipes and sourcing the
          finest ingredients from around the world.
        </SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.title} {...category} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <CafeButton to="/menu" variant="primary" size="lg">
            View Complete Menu
          </CafeButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
