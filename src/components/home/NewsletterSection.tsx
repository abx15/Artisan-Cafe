import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import CafeButton from "@/components/ui/CafeButton";
import { CoffeeCupIcon } from "@/components/icons/CafeIcons";
import { Mail, ArrowRight } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(
      "Welcome to the Artisan family! Check your inbox for exclusive offers."
    );
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-secondary/50 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-60 h-60 border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-40 h-40 border border-accent/10 rounded-full"
      />

      <div className="w-full px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CoffeeCupIcon size={32} className="text-primary" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay in the Loop
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              Subscribe to our newsletter for exclusive recipes, seasonal menu
              updates, special offers, and behind-the-scenes stories from our
              kitchen.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="relative flex-1">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-emerald disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={18} />
                  </>
                )}
              </motion.button>
            </form>

            <p className="text-sm text-muted-foreground mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
