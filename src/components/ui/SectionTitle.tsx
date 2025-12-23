import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  centered?: boolean;
  className?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({
  title,
  subtitle,
  children,
  centered = true,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      {subtitle && (
        <span className="inline-block text-accent font-body text-sm tracking-widest uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
        {title}
      </h2>
      {children && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          {children}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-1 w-24 bg-gradient-to-r from-primary to-accent mt-6 rounded-full ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
};

export default SectionTitle;
