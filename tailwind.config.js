/** @type {import('tailwindcss').Config} */
export const content = ["./**/*.{html,js}"];
export const theme = {
    extend: {},
};
export const plugins = [require("daisyui"),
    function ({ addUtilities }) {
        addUtilities({
          '.no-scrollbar': {
            /* Chrome, Safari and Opera */
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            /* IE, Edge and Firefox */
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
          },
        });
      },
];
export const daisyui = {
    themes: [
        {
            mytheme: {
                primary: "#FFE3C3", // <- your RGB color as hex
                secondary: "#F6D6AD", // <- optional, just a complement
                accent: "#FCD2B1",
                neutral: "#291334",
                "base-100": "#ffffff",
            },
        },
    ],
};
