import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const chefs = [
  {
    name: "Chef Ananya Desai",
    role: "Head Pastry Chef",
    image:
      "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=300&h=300&fit=crop",
    description:
      "With 15 years of experience from Paris to Mumbai, Ananya brings French finesse to Indian flavors.",
  },
  {
    name: "Rohan Kapoor",
    role: "Master Chocolatier",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
    description:
      "Trained in Belgium, Rohan crafts each chocolate with precision and passion.",
  },
  {
    name: "Mei Lin Wong",
    role: "Asian Cuisine Specialist",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop",
    description:
      "Our Chaumin queen brings authentic Indo-Chinese flavors perfected over 10 years.",
  },
];

const ChefSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="w-full px-4 lg:px-8">
        <SectionTitle title="Meet Our Artisans" subtitle="The Team">
          The passionate souls behind every delicious creation. Our talented
          team brings years of expertise and a love for culinary arts.
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="text-center group"
            >
              <div className="relative mb-6 mx-auto w-48 h-48">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-full rounded-full overflow-hidden border-4 border-accent/30 shadow-card"
                >
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 scale-110 group-hover:rotate-45 transition-transform duration-700" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {chef.name}
              </h3>
              <p className="text-accent font-medium text-sm mb-3">
                {chef.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {chef.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
