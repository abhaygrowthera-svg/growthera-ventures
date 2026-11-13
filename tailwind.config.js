/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#2B2550',
          soft: '#3A335F',
          muted: '#4A4468',
        },
        purple: {
          DEFAULT: '#6F63C8',
          light: '#A99FE6',
          soft: '#E8E5F7',
          deep: '#5649B0',
        },
        lavender: {
          DEFAULT: '#A99FE6',
          soft: '#F4F3FA',
          mist: '#EDEAF8',
        },
        gold: {
          DEFAULT: '#E0A93B',
          soft: '#F5E6C4',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          page: '#F4F3FA',
          muted: '#F8F7FC',
        },
        border: {
          DEFAULT: '#E4E1F0',
          soft: '#EEEBF6',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(43, 37, 80, 0.06)',
        card: '0 8px 32px rgba(43, 37, 80, 0.08)',
        lift: '0 12px 40px rgba(43, 37, 80, 0.12)',
        glow: '0 0 0 4px rgba(111, 99, 200, 0.15)',
        navbar: '0 4px 20px rgba(43, 37, 80, 0.08)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.7' },
          '50%': { transform: 'scale(1.05)', opacity: '0.3' },
          '100%': { transform: 'scale(0.95)', opacity: '0.7' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(80px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.85)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'float-soft': 'float-soft 5s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin-slow 20s linear infinite',
        'pulse-ring': 'pulse-ring 3s ease-in-out infinite',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
      },

      backgroundImage: {
        'duotone-overlay':
          'linear-gradient(135deg, rgba(43, 37, 80, 0.12) 0%, rgba(111, 99, 200, 0.1) 100%)',
      },
    },
  },
  plugins: [],
}
