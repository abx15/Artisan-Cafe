import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
    alt: 'Cozy cafe corner',
  },
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=400&fit=crop',
    alt: 'Cafe interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=400&fit=crop',
    alt: 'Barista at work',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop',
    alt: 'Restaurant ambiance',
  },
  {
    src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=400&h=400&fit=crop',
    alt: 'Latte art',
  },
  {
    src: 'https://images.unsplash.com/photo-1483648969698-5e7dcaa9444f?w=400&h=400&fit=crop',
    alt: 'Fresh pastries',
  },
];

const GallerySection = () => {
  return (
    <section className="py-24 bg-cafe-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          title="Moments at Artisan"
          subtitle="Our Gallery"
        >
          Take a peek into our world — the cozy corners, the artful creations, and the smiles we share every day.
        </SectionTitle>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className={`relative overflow-hidden rounded-xl shadow-soft cursor-pointer group ${
                index === 0 ? 'md:row-span-2 md:col-span-1' : ''
              } ${index === 3 ? 'md:col-span-2' : ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? 'h-full min-h-[300px] md:min-h-[500px]' : 
                  index === 3 ? 'h-48 md:h-60' : 'h-48 md:h-60'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-primary-foreground text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground">
            Follow us on Instagram{' '}
            <a href="#" className="text-accent font-medium hover:underline">
              @artisancafe
            </a>{' '}
            for daily inspiration
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
