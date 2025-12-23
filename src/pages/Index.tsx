import PageTransition from '@/components/layout/PageTransition';
import HeroSection from '@/components/home/HeroSection';
import SpecialOffers from '@/components/home/SpecialOffers';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import FeaturedItems from '@/components/home/FeaturedItems';
import ChefSection from '@/components/home/ChefSection';
import WhySection from '@/components/home/WhySection';
import GallerySection from '@/components/home/GallerySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const Index = () => {
  return (
    <PageTransition>
      <main>
        <HeroSection />
        <SpecialOffers />
        <FeaturedCategories />
        <FeaturedItems />
        <ChefSection />
        <WhySection />
        <GallerySection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
    </PageTransition>
  );
};

export default Index;
