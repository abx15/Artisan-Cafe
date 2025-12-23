import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
  to: string;
  index?: number;
}

const CategoryCard: FC<CategoryCardProps> = ({
  title,
  description,
  image,
  icon,
  to,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link to={to} className="block group">
        <motion.article
          whileHover={{ y: -12, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="relative h-80 rounded-2xl overflow-hidden shadow-card cursor-pointer"
        >
          {/* Background Image */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cafe-espresso via-cafe-espresso/40 to-transparent" />

          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                'radial-gradient(circle at 50% 100%, hsl(var(--accent) / 0.3), transparent 70%)',
            }}
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            {/* Icon */}
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-14 h-14 rounded-xl bg-accent/20 backdrop-blur-md flex items-center justify-center mb-4 text-accent-light border border-accent/30"
            >
              {icon}
            </motion.div>

            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2 group-hover:text-accent-light transition-colors">
              {title}
            </h3>
            <p className="text-primary-foreground/80 text-sm line-clamp-2">
              {description}
            </p>

            {/* Arrow indicator */}
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileHover={{ x: 5, opacity: 1 }}
              className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
