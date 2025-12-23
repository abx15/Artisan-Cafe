import { motion } from 'framer-motion';
import CafeButton from '@/components/ui/CafeButton';
import { CoffeeCupIcon, LeafIcon, StarIcon } from '@/components/icons/CafeIcons';
import { Sparkles, Clock, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cafe-cream to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating coffee beans */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10"
            initial={{ y: '100vh', x: `${15 + i * 15}%`, rotate: 0 }}
            animate={{
              y: '-100vh',
              rotate: 360,
              transition: {
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 3,
              },
            }}
          >
            <CoffeeCupIcon size={40 + i * 10} />
          </motion.div>
        ))}

        {/* Decorative circles */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/20 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8"
          >
            <LeafIcon size={16} />
            <span className="text-sm font-medium tracking-wide">
              Est. 2015 • Artisan Crafted with Love
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Where Every Bite
            <br />
            <span className="text-gradient">Tells a Story</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            Step into our warm, inviting space and discover a world of handcrafted delights. From freshly baked artisan cakes to rich Belgian chocolates, aromatic single-origin coffees, and savory Indo-Chinese noodles — every item is made with passion and the finest ingredients.
          </motion.p>

          {/* Quick info badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock size={16} className="text-accent" />
              <span>Open Daily 8 AM - 10 PM</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="text-accent" />
              <span>Foodie District, Mumbai</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles size={16} className="text-accent" />
              <span>100% Fresh Daily</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CafeButton to="/menu" variant="primary" size="lg">
              Explore Our Menu
            </CafeButton>
            <CafeButton to="/about" variant="outline" size="lg">
              Our Story
            </CafeButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto"
          >
            {[
              { number: '50+', label: 'Menu Items' },
              { number: '8+', label: 'Years Serving' },
              { number: '15K+', label: 'Happy Customers' },
              { number: '4.9', label: 'Average Rating', icon: <StarIcon size={14} className="text-accent" /> },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50"
                whileHover={{ y: -3, backgroundColor: 'hsl(var(--card))' }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-primary flex items-center justify-center gap-1">
                  {stat.number}
                  {stat.icon}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-2.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
