import type { Config } from 'tailwindcss'

// Tailwind configuration for the EasyASTA site.
// Defines a custom colour palette matching the branding
// and tells Tailwind where to look for class names.

const config: Config = {
  darkMode: false,
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004e80',
          light: '#0067a3',
          dark: '#00365c'
        },
        accent: {
          DEFAULT: '#FF991F',
          light: '#ffb44d',
          dark: '#cc7a19'
        },
        neutral: {
          DEFAULT: '#F4F4F4',
          dark: '#1A1A1A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        body: ['Lato', 'sans-serif']
      }
    }
  },
  plugins: []
}

export default config