/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        "main-blue-gradient":
          "linear-gradient(115deg, #0f172a 0%, #193251 50%, #0f172a 100% )",
      }),
      boxShadow: {
        neon: "0 0 15px theme('colors.green.200'), 0 0 40px theme('colors.blue.700')",
      },
    },
  },
  plugins: [],
};
