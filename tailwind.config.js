/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        mx: '1390px',
      },
      animation: {
        rotate: 'rotate 3s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
    fontFamily: {
      angrybirds: ["AngryBirds", "sans-serif"],
      tthoves: ["TTHoves", "sans-serif"],// Add the custom font
      },
  },
  plugins: [
    
  ],
}