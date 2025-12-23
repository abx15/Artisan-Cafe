import { motion } from 'framer-motion';
import CafeButton from '@/components/ui/CafeButton';
import { Sparkles, Gift, Percent } from 'lucide-react';

const SpecialOffers = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="circles" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#circles)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Offer 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-card/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/20"
          >
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
              <Sparkles size={24} className="text-accent-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
              Happy Hours
            </h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Get 20% off on all beverages every weekday from 3 PM to 5 PM. Perfect for your afternoon pick-me-up!
            </p>
            <span className="inline-block bg-accent/20 text-accent-light text-xs font-medium px-3 py-1 rounded-full">
              Mon - Fri, 3-5 PM
            </span>
          </motion.div>

          {/* Offer 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-card/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/20"
          >
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
              <Gift size={24} className="text-accent-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
              Birthday Special
            </h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Celebrate your special day with us! Get a complimentary slice of cake when you dine with 4+ guests.
            </p>
            <span className="inline-block bg-accent/20 text-accent-light text-xs font-medium px-3 py-1 rounded-full">
              Valid with ID proof
            </span>
          </motion.div>

          {/* Offer 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-card/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/20"
          >
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
              <Percent size={24} className="text-accent-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
              Loyalty Rewards
            </h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Join our loyalty program and earn points on every purchase. Redeem for free treats and exclusive perks!
            </p>
            <span className="inline-block bg-accent/20 text-accent-light text-xs font-medium px-3 py-1 rounded-full">
              Earn 1 point per ₹10
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
