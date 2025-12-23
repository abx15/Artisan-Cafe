import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import SectionTitle from '@/components/ui/SectionTitle';
import CafeButton from '@/components/ui/CafeButton';
import { menuData } from '@/data/menuData';
import { StarIcon } from '@/components/icons/CafeIcons';
import { Clock, Flame } from 'lucide-react';

const FeaturedItems = () => {
  const featuredItems = menuData.filter((item) => item.featured);

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          title="Chef's Favorites"
          subtitle="Featured Items"
        >
          Hand-picked selections from our master chefs — tried, tested, and loved by thousands of customers. These are the dishes that keep people coming back.
        </SectionTitle>

        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-primary/30 !w-3 !h-3',
            bulletActiveClass: '!bg-accent !w-8 !rounded-full',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-16"
        >
          {featuredItems.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-card mx-2 my-4"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cafe-espresso/80 via-transparent to-transparent" />
                  
                  {/* Rating */}
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <StarIcon size={14} className="text-accent" />
                    <span className="text-sm font-medium text-foreground">4.9</span>
                  </div>

                  {/* Popular badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-accent/90 text-accent-foreground px-3 py-1.5 rounded-full">
                    <Flame size={14} />
                    <span className="text-xs font-medium">Popular</span>
                  </div>

                  {/* Category badge */}
                  <span className="absolute bottom-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full capitalize">
                    {item.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <span className="font-display text-xl font-bold text-accent">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Prep time indicator */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock size={14} />
                    <span>Ready in 10-15 mins</span>
                  </div>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-8">
          <CafeButton to="/menu" variant="primary" size="lg">
            View Full Menu
          </CafeButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
