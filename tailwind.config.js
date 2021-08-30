module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            },
            colors: {
                gris: 'rgb(81, 81, 81)',
                rojo: 'rgb(237, 10, 33)',
                anaranjado: 'rgb(255, 121, 0)',
                dorado: 'rgb(255, 182, 0)',
                amarillo: 'rgb(252, 213, 126)',
                claro: 'rgb(255, 243, 222)',
            },
            borderWidth: {
                3: '3px',
                6: '6px',
            },
            fontSize: {
                '2xs': '.6rem',
                '3xs': '.45rem',
            },
            animation: {
                loading: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            screens: {
                '3xl': '1890px',
                '4xl': '3800px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
};
