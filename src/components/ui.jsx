import React from 'react';
import { motion } from 'framer-motion';

// Reusable scroll-triggered animation wrapper
export function FadeInView({ children, className = '', delay = 0, direction = 'up', duration = 0.6 }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      scale: direction === 'scale' ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger children animation container
export function StaggerContainer({ children, className = '', staggerDelay = 0.08 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger child
export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Section header component with consistent design
export function SectionHeader({ eyebrow, title, subtitle, align = 'left', light = false }) {
  return (
    <FadeInView className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} mb-16`}>
      <span className={`inline-block text-xs font-bold uppercase tracking-[0.3em] mb-3 ${
        light ? 'text-indigo-300' : 'text-indigo-600'
      }`}>
        {eyebrow}
      </span>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      <div className={`w-20 h-1 rounded-full mt-4 mb-5 ${
        light ? 'bg-indigo-400' : 'bg-gradient-to-r from-indigo-600 to-purple-500'
      } ${align === 'center' ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          light ? 'text-slate-300' : 'text-slate-500'
        }`}>
          {subtitle}
        </p>
      )}
    </FadeInView>
  );
}

// Badge pill component
export function Badge({ children, variant = 'primary', className = '' }) {
  const styles = {
    primary: 'bg-indigo-600 text-white',
    secondary: 'bg-indigo-100 text-indigo-700',
    dark: 'bg-indigo-950 text-indigo-200 border border-indigo-800/50',
    outline: 'bg-white border border-indigo-200 text-indigo-700',
    ghost: 'bg-indigo-50/80 text-indigo-600 border border-indigo-100',
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
}

