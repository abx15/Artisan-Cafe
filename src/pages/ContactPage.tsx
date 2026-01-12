import { motion } from "framer-motion";
import { useState } from "react";
import PageTransition from "@/components/layout/PageTransition";
import CafeButton from "@/components/ui/CafeButton";
import { CoffeeCupIcon } from "@/components/icons/CafeIcons";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: "Visit Us",
    content: "123 Artisan Street, Foodie District, Mumbai 400001",
  },
  {
    icon: <Phone size={24} />,
    title: "Call Us",
    content: "+91 98765 43210",
  },
  {
    icon: <Mail size={24} />,
    title: "Email Us",
    content: "hello@artisancafe.com",
  },
  {
    icon: <Clock size={24} />,
    title: "Opening Hours",
    content: "Mon - Sun: 8:00 AM - 10:00 PM",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <PageTransition>
      <main className="pt-24 pb-16 min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-72 md:h-96 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&h=400&fit=crop"
              alt="Contact us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cafe-espresso/90 via-cafe-espresso/70 to-transparent" />
          </div>

          <div className="relative w-full px-4 lg:px-8 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <CoffeeCupIcon size={32} className="text-accent" />
              <span className="text-accent text-sm tracking-widest uppercase">
                Get in Touch
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/80 text-lg mt-3 max-w-xl"
            >
              We'd love to hear from you. Reach out for reservations, inquiries,
              or just to say hello!
            </motion.p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="w-full px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <CafeButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={18} />
                        Send Message
                      </span>
                    )}
                  </CafeButton>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Visit Our Cafe
                </h2>
                <p className="text-muted-foreground mb-8">
                  We're conveniently located in the heart of the city. Drop by
                  anytime!
                </p>

                {/* Contact Cards */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -3 }}
                      className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all border border-border/50"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                        {info.icon}
                      </div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {info.content}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="relative h-72 rounded-xl overflow-hidden shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
                    alt="Location map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-cafe-espresso/40 flex items-center justify-center">
                    <motion.a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-card text-foreground font-medium rounded-lg shadow-card hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      <MapPin size={18} />
                      Open in Google Maps
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-secondary/50">
          <div className="w-full px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Can't find what you're looking for? Feel free to reach out to us
                directly.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
              {[
                {
                  q: "Do you take reservations?",
                  a: "Yes! You can book a table by calling us or filling out the contact form above.",
                },
                {
                  q: "Do you offer catering services?",
                  a: "Absolutely! We provide catering for events of all sizes. Contact us for a custom quote.",
                },
                {
                  q: "Are there vegan options available?",
                  a: "Yes, we have a variety of vegan-friendly options across our menu.",
                },
                {
                  q: "Do you offer delivery?",
                  a: "We partner with major delivery apps. You can also order directly for pickup.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-soft"
                >
                  <h3 className="font-display font-semibold text-foreground mb-2 flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm pl-8">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default ContactPage;
