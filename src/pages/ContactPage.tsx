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
    title: 'Visit Us',
    content: 'Civil Lines, Prayagraj, Uttar Pradesh – 211001, India',
  },
  {
    icon: <Phone size={24} />,
    title: 'Call Us',
    content: '+91 91299 39972',
  },
  {
    icon: <Mail size={24} />,
    title: 'Email Us',
    content: 'developerarunwork@gmail.com',
  },
  {
    icon: <Clock size={24} />,
    title: 'Opening Hours',
    content: 'Mon – Sun: 8:00 AM – 10:00 PM',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success('Message sent successfully. We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <PageTransition>
      <main className="pt-24 pb-16 min-h-screen bg-background">

        {/* HERO */}
        <section className="relative h-72 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&fit=crop"
            alt="Contact Artisan Cafe"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cafe-espresso/90 via-cafe-espresso/70 to-transparent" />
          <div className="relative container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
              <CoffeeCupIcon size={32} className="text-accent" />
              <span className="text-accent text-sm tracking-widest uppercase">Get in Touch</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Contact Us
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 text-lg mt-3 max-w-xl">
              Have questions or planning a visit? We’d love to welcome you at our Prayagraj cafe.
            </motion.p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16">

              {/* FORM */}
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-3xl font-bold mb-3">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">Fill in the form and our team will reach out shortly.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />

                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  />

                  <CafeButton type="submit" size="lg" className="w-full sm:w-auto">
                    {isSubmitting ? 'Sending...' : (
                      <span className="flex items-center gap-2">
                        <Send size={18} />
                        Send Message
                      </span>
                    )}
                  </CafeButton>
                </form>
              </motion.div>

              {/* CONTACT INFO + MAP */}
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-3xl font-bold mb-3">Visit Our Cafe</h2>
                <p className="text-muted-foreground mb-8">
                  Located in the heart of Prayagraj — easy to reach and always welcoming.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.div key={index} whileHover={{ y: -2 }} className="bg-card p-5 rounded-xl shadow-sm border">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3">
                        {info.icon}
                      </div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-sm text-muted-foreground">{info.content}</p>
                    </motion.div>
                  ))}
                </div>

                {/* REAL GOOGLE MAP */}
                <div className="w-full h-72 md:h-80 rounded-xl overflow-hidden shadow-card border border-border">
                  <iframe
                    title="Artisan Cafe Location - Prayagraj"
                    src="https://www.google.com/maps?q=Civil%20Lines%20Prayagraj%20Uttar%20Pradesh&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                ['Do you take reservations?', 'Yes, call us or use the contact form.'],
                ['Do you offer catering?', 'Yes, we provide catering for all events.'],
                ['Vegan options available?', 'Yes, multiple vegan items are available.'],
                ['Home delivery?', 'Available via partner delivery apps.'],
              ].map(([q, a], i) => (
                <div key={i} className="bg-card p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold flex gap-2 mb-2">
                    <CheckCircle size={18} className="text-primary" />
                    {q}
                  </h3>
                  <p className="text-sm text-muted-foreground pl-6">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </PageTransition>
  );
};

export default ContactPage;
