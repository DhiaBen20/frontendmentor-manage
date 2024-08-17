import { theme } from "tailwindcss/defaultConfig";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Be Vietnam Pro", ...theme.fontFamily.sans],
            },
            colors: {
                "app-orange": {
                    100: "hsl(var(--orange-100) / <alpha-value>)",
                    400: "hsl(var(--orange-400) / <alpha-value>)",
                },
                "app-gray": {
                    100: "hsl(var(--gray-100) / <alpha-value>)",
                    200: "hsl(var(--gray-200) / <alpha-value>)",
                    700: "hsl(var(--gray-700) / <alpha-value>)",
                    800: "hsl(var(--gray-800) / <alpha-value>)",
                },
            },
        },
    },
    plugins: [],
};
