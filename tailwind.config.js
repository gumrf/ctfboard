module.exports = {
    mode: process.env.NODE_ENV ? 'jit' : undefined,
    darkMode: 'class',
    content: [
        // './public/**/*.html',
        './app/**/*.{js,jsx,ts,tsx,vue}',
    ],
    safelist: [
        "container",
        {
            pattern: /from-(yellow|emerald|fuchsia|sky|red|violet)-500/,
        },
        {
            pattern: /to-(orange|lime|purple|blue|rose|indigo)-600/,
        },
    ],
    theme: {
        extend: {
            minWidth: {
                'xs': '320px',
            },
            backgroundImage: {
                'pixel-man': "url('/images/pixel-man.jpg')",
            },
            willChange: {
                'transform-opacity': 'transform, opacity',
            },
            colors: {
                custom: {
                    gray: '#424245',
                },
                'grey2': 'rgb(238, 239, 252)',
                'error': 'hsla(10, 50%, 50%, 0.1)',
                'error-dark': '#FF0000'
            },
            animation: {
                'spin-slow': 'spin 30s linear infinite',
            },
            fontSize: {
                custom: ['8px', '8px'],
            },
            height: {
                '8vh': '80vh',
                'screenMinusNavbar': 'calc(100vh - 56px)',
                '600': '600px',
            },
            width: {
                'taskView': '440px',
            },
            maxHeight: {
                'sh': 'calc(100vh - 56px)',
                '2vh': '200vh',
                '800': '800px'
            },
            minHeight: {
                '600': '600px',
            },
        },
    },
    plugins: [
        require('@shrutibalasa/tailwind-grid-auto-fit'),
    ],
}
