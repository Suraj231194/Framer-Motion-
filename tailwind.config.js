/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2563EB', // Blue-600
                    dark: '#1D4ED8',    // Blue-700
                    light: '#3B82F6',   // Blue-500
                },
                secondary: {
                    DEFAULT: '#EA580C', // Orange-600
                    dark: '#C2410C',    // Orange-700
                },
                dark: '#111827',     // Gray-900
                light: '#F3F4F6',    // Gray-100
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #E2E8F0 0deg, #F8FAFC 180deg)',
            }
        },
    },
    plugins: [],
}
