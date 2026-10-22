/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'royal-gold': '#fc7507',
                'stone-light': '#F0EEE8',
                'charcoal-dark': '#24231F',
                'deep-dark': '#181816',
                'taupe-footer': '#D7D1C4',
                'accent-lime': '#D7DF7B',
                'muted-gray': '#77736A',
                'muted-body': '#68645B',
                'muted-dark': '#AAA69C',
            },
            fontFamily: {
                italiana: ['"Italiana"', 'serif'],
                dmsans: ['"DM Sans"', 'sans-serif'],
                serif: ['"Italiana"', '"Playfair Display"', 'serif'],
                sans: ['"DM Sans"', '"Space Grotesk"', 'sans-serif'],
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
