// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937', // Dark Gray
        secondary: '#F3F4F6', // Light Gray
        accent: '#34D399', // Teal
        link: '#3B82F6', // Blue
        glass: 'rgba(255, 255, 255, 0.1)' // Glassmorphism effect
      },
      boxShadow: {
        'neumorphism': '8px 8px 15px rgba(0, 0, 0, 0.1), -8px -8px 15px rgba(255, 255, 255, 0.7)',
        'neumorphism-inset': 'inset 8px 8px 15px rgba(0, 0, 0, 0.1), inset -8px -8px 15px rgba(255, 255, 255, 0.7)',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideUp: 'slideUp 0.5s ease-in-out',
        pulse: 'pulse 1.5s infinite',
        bounce: 'bounce 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
