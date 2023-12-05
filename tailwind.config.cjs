/** @type {import('tailwindcss').Config} */

// noinspection JSUnresolvedReference
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                quenda: ['"Quenda Medium"','"system-ui"']
            }
        },
    },
    plugins: [],
};