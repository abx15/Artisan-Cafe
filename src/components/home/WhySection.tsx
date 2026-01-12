import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  LeafIcon,
  CoffeeCupIcon,
  StarIcon,
} from "@/components/icons/CafeIcons";
import { Heart, Award, Users } from "lucide-react";

const features = [
  {
    icon: <LeafIcon size={28} />,
    title: "Fresh Ingredients",
    description:
      "We source only the finest, freshest ingredients from local farms and trusted suppliers.",
  },
  {
    icon: <Heart size={28} />,
    title: "Made with Love",
    description:
      "Every dish is crafted with passion and care by our skilled artisan chefs.",
  },
  {
    icon: <Award size={28} />,
    title: "Award Winning",
    description:
      "Recognized for excellence with multiple culinary awards and accolades.",
  },
  {
    icon: <CoffeeCupIcon size={28} />,
    title: "Premium Coffee",
    description:
      "Single-origin beans roasted in-house for the perfect cup every time.",
  },
  {
    icon: <Users size={28} />,
    title: "Warm Ambiance",
    description:
      "A cozy atmosphere designed for comfort, connection, and memorable moments.",
  },
  {
    icon: <StarIcon size={28} />,
    title: "Customer First",
    description:
      "Your satisfaction is our priority—exceptional service, every visit.",
  },
];

const WhySection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -right-20 w-64 h-64 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 -left-20 w-80 h-80 border border-accent/10 rounded-full"
        />
      </div>

      <div className="w-full px-4 lg:px-8 relative z-10">
        <SectionTitle title="Why Choose Us" subtitle="Our Promise">
          We're committed to delivering an exceptional experience that goes
          beyond just great food.
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-card rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:text-accent transition-colors mb-6"
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
