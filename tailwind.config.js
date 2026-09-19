/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'royal-gold': '#C8A97E',
                'deep-black': '#FFFFFF',
                'rich-charcoal': '#F5F5F0',
                'off-white': '#1A1A1A',
                'navy-blue': '#0F172A',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Space Grotesk"', 'sans-serif'],
            },
            animation: {
                'marquee': 'marquee 20s linear infinite',
                'marquee-fast': 'marquee 10s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'fadeInUp': 'fadeInUp 0.8s ease forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
