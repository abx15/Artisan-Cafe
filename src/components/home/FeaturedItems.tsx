import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import SectionTitle from "@/components/ui/SectionTitle";
import CafeButton from "@/components/ui/CafeButton";
import { menuData } from "@/data/menuData";
import { StarIcon } from "@/components/icons/CafeIcons";
import { Clock, Flame } from "lucide-react";

const FeaturedItems = () => {
  const featuredItems = menuData.filter(item => item.featured);

  return (
    <section className="py-28 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        <SectionTitle title="Chef's Favorites" subtitle="Featured Items">
          Hand-picked selections from our master chefs — tried, tested, and loved
          by thousands of customers.
        </SectionTitle>

        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          centeredSlides
          grabCursor
          loop
          speed={9000} // 🔥 continuous smooth speed
          slidesPerView={1}

          autoplay={{
            delay: 0, // 🔥 key for infinite scroll
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          coverflowEffect={{
            rotate: 0,
            stretch: 60,
            depth: 160,
            modifier: 1.5,
            slideShadows: false,
          }}

          pagination={{
            clickable: true,
            bulletClass:
              'swiper-pagination-bullet !bg-primary/30 !w-2.5 !h-2.5',
            bulletActiveClass:
              '!bg-accent !w-8 !rounded-full',
          }}

          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}

          className="continuous-swiper !pb-20"
        >
          {featuredItems.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card mx-3 my-6"
              >
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-cafe-espresso/80 via-transparent to-transparent" />

                  {/* Rating */}
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-card/90 backdrop-blur px-3 py-1.5 rounded-full">
                    <StarIcon size={14} className="text-accent" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>

                  {/* Popular */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-accent text-accent-foreground px-3 py-1.5 rounded-full">
                    <Flame size={14} />
                    <span className="text-xs font-medium">Popular</span>
                  </div>

                  {/* Category */}
                  <span className="absolute bottom-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full capitalize">
                    {item.category}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">
                      {item.name}
                    </h3>
                    <span className="font-display text-xl font-bold text-accent">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock size={14} />
                    <span>Ready in 10–15 mins</span>
                  </div>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <CafeButton to="/menu" variant="primary" size="lg">
            View Full Menu
          </CafeButton>
        </div>

      </div>
    </section>
  );
};

export default FeaturedItems;
