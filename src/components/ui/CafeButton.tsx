import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface CafeButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const CafeButton: FC<CafeButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-body font-medium rounded-lg transition-all duration-300 relative overflow-hidden';

  const variants = {
    primary:
      'bg-primary text-primary-foreground hover:bg-primary-dark shadow-emerald hover:shadow-lg',
    secondary:
      'bg-accent text-accent-foreground hover:bg-accent-dark shadow-glow hover:shadow-lg',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    ghost: 'text-foreground hover:bg-secondary hover:text-secondary-foreground',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const springTransition = {
    type: 'spring' as const,
    stiffness: 400,
    damping: 17,
  };

  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={springTransition}
        className="inline-block"
      >
        <Link to={to} className={combinedStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={springTransition}
        href={href}
        className={combinedStyles}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={springTransition}
      onClick={onClick}
      type={type}
      className={combinedStyles}
    >
      {children}
    </motion.button>
  );
};

export default CafeButton;
