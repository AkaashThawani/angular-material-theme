/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require('@spartan-ng/ui-helm/theme/preset')],
    content: [
        './src/**/*.{html,ts}',
        './libs/**/*.{html,ts}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
