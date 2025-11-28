/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4A90E2',
                secondary: '#1A1A1A',
                accent: '#F5F5F5',
                dark: '#0D0D0D',
                textPrimary: '#FFFFFF',
                textSecondary: '#CCCCCC',
            },
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                body: ['system-ui', 'sans-serif'],
                button: ['Poppins', 'sans-serif'],
            },
            borderRadius: {
                'xl': '12px',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },
        },
    },
    plugins: [],
}
