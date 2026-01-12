import { motion } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";
import SectionTitle from "@/components/ui/SectionTitle";
import CafeButton from "@/components/ui/CafeButton";
import {
  LogoIcon,
  LeafIcon,
  CoffeeCupIcon,
} from "@/components/icons/CafeIcons";
import { Award, Users, Heart, Target } from "lucide-react";

const milestones = [
  {
    year: "2015",
    title: "Our Beginning",
    description: "Started as a small coffee cart in the heart of the city.",
  },
  {
    year: "2017",
    title: "First Cafe",
    description: "Opened our flagship cafe with a full bakery section.",
  },
  {
    year: "2019",
    title: "Award Winner",
    description: 'Won "Best Artisan Cafe" at the National Food Awards.',
  },
  {
    year: "2023",
    title: "Expansion",
    description: "Launched our premium chocolate and noodle offerings.",
  },
];

const values = [
  {
    icon: <Heart size={28} />,
    title: "Passion",
    description: "Every dish is created with love and dedication to the craft.",
  },
  {
    icon: <Award size={28} />,
    title: "Quality",
    description:
      "We source only the finest ingredients from trusted suppliers.",
  },
  {
    icon: <Users size={28} />,
    title: "Community",
    description: "Building connections through the joy of shared meals.",
  },
  {
    icon: <Target size={28} />,
    title: "Innovation",
    description: "Constantly evolving while honoring traditional flavors.",
  },
];

const AboutPage = () => {
  return (
    <PageTransition>
      <main className="pt-24 pb-16 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=600&fit=crop"
              alt="Our cafe interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cafe-espresso via-cafe-espresso/60 to-transparent" />
          </div>

          <div className="relative w-full px-4 lg:px-8 h-full flex flex-col justify-end pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <LogoIcon size={56} className="text-accent" />
              <div>
                <span className="text-xs text-accent tracking-widest uppercase">
                  Est. 2015
                </span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl"
            >
              A journey of passion, flavor, and the art of creating memorable
              culinary experiences.
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="w-full px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent text-sm tracking-widest uppercase">
                  Who We Are
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                  Crafting Moments of Joy Since 2015
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Artisan Cafe was born from a simple dream: to create a space
                    where every bite tells a story and every sip brings comfort.
                    What started as a humble coffee cart has blossomed into a
                    beloved destination for food enthusiasts.
                  </p>
                  <p>
                    Our team of passionate chefs and baristas work tirelessly to
                    craft each item with precision and love. From our signature
                    cakes made with locally sourced ingredients to our aromatic
                    single-origin coffees, every detail is carefully considered.
                  </p>
                  <p>
                    Today, we're proud to serve not just food, but experiences
                    that bring people together. Whether you're celebrating a
                    milestone or simply enjoying a quiet afternoon, Artisan Cafe
                    is your home away from home.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=700&fit=crop"
                    alt="Our team at work"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-xl bg-accent/20 -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-xl bg-primary/20 -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary/50">
          <div className="w-full px-4 lg:px-8">
            <SectionTitle title="Our Values" subtitle="What Drives Us">
              The principles that guide everything we do at Artisan Cafe.
            </SectionTitle>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-xl p-8 text-center shadow-soft hover:shadow-card transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-background">
          <div className="w-full px-4 lg:px-8">
            <SectionTitle title="Our Journey" subtitle="Milestones">
              Key moments that shaped who we are today.
            </SectionTitle>

            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 text-center md:text-right">
                    {index % 2 === 0 ? (
                      <>
                        <span className="text-accent font-display text-xl font-bold">
                          {milestone.year}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-2">
                          {milestone.description}
                        </p>
                      </>
                    ) : (
                      <div className="md:hidden">
                        <span className="text-accent font-display text-xl font-bold">
                          {milestone.year}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-2">
                          {milestone.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background shadow-emerald z-10" />

                  <div className="flex-1 text-center md:text-left">
                    {index % 2 === 1 && (
                      <div className="hidden md:block">
                        <span className="text-accent font-display text-xl font-bold">
                          {milestone.year}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-2">
                          {milestone.description}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="w-full px-4 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <LeafIcon size={48} className="text-accent mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Experience Artisan Cafe?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
                Visit us today and discover why we're the city's favorite
                destination for artisan treats.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CafeButton to="/menu" variant="secondary" size="lg">
                  View Our Menu
                </CafeButton>
                <CafeButton
                  to="/contact"
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Contact Us
                </CafeButton>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default AboutPage;
