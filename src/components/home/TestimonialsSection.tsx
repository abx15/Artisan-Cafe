import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

import SectionTitle from "@/components/ui/SectionTitle";
import { QuoteIcon, StarIcon } from "@/components/icons/CafeIcons";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Food Blogger @FoodieInMumbai",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content:
      "The Velvet Rose Cake here is absolutely divine! Every bite melts in your mouth. The attention to detail in their presentation is impeccable. This has become my go-to place for all celebrations — birthdays, anniversaries, or just treating myself!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Coffee Enthusiast & Writer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content:
      "Best espresso in the city, hands down. The baristas really know their craft — they can explain the origin, roast profile, and brewing method of every bean. The cold brew kept me energized through my entire novel writing session. Pure perfection.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Mother of Two",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content:
      "I bring my family here every weekend without fail. The kids absolutely love the chocolates (they ask for the hazelnut pralines specifically!), and the chaumin is authentic and delicious. It feels like home — warm, welcoming, and always consistent.",
    rating: 5,
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    content:
      "Perfect spot for client meetings or focused work sessions. Professional service, excellent coffee, and the truffle chocolates seal every deal for me. I've closed three major partnerships at this very cafe. The ambiance just works!",
    rating: 5,
  },
  {
    id: 5,
    name: "Sneha Iyer",
    role: "Wedding Planner",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    content:
      "We order cakes from Artisan for all our wedding events. The tiered cakes are stunning, the flavors are sophisticated, and they've never missed a deadline. My clients are always impressed. Highly recommend for special occasions!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="5" cy="5" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="w-full px-4 lg:px-8 relative z-10">
        <SectionTitle
          title="What Our Guests Say"
          subtitle="Testimonials"
          className="text-primary-foreground [&>span]:text-accent-light [&>h2]:text-primary-foreground [&>p]:text-primary-foreground/70 [&>div]:from-accent [&>div]:to-accent-light"
        >
          Don't just take our word for it — hear from our wonderful community of
          food lovers who make our cafe special every single day.
        </SectionTitle>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet !bg-primary-foreground/30 !w-3 !h-3",
            bulletActiveClass: "!bg-accent !w-8 !rounded-full",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-card rounded-2xl p-8 h-full relative"
              >
                {/* Quote icon */}
                <QuoteIcon
                  size={40}
                  className="text-accent/20 absolute top-6 right-6"
                />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} size={16} className="text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6 italic text-sm">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
