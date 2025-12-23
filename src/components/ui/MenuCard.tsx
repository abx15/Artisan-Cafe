import { motion } from 'framer-motion';
import { FC } from 'react';
import type { MenuItem } from '@/data/menuData';

interface MenuCardProps {
  item: MenuItem;
  index?: number;
}

const MenuCard: FC<MenuCardProps> = ({ item, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-cafe-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Featured badge */}
        {item.featured && (
          <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full shadow-glow">
            Featured
          </span>
        )}

        {/* Category tag */}
        <span className="absolute bottom-3 left-3 bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full capitalize backdrop-blur-sm">
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <span className="text-accent font-display font-bold text-lg whitespace-nowrap">
            ₹{item.price}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
};

export default MenuCard;
