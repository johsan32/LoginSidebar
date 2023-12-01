/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3d7bf1',
        thinColor:"rgb(227, 242, 253)",
        secondary: '#ede7f6',
        brandColor: '#ec1b24',
        primarydark: '#2b4ec6',
        darkText: '#000',
        bodyText:"#3d7bf1",
        secondaryText:"#ede7f6",
        btnBack:"rgb(227, 242, 253)",
        textPrimary:'#3d7bf1',
        textSecondary:'#2196f3',
        btnPrimary:'#3d7bf1',
        btnSecondary: '#2196f3',
      }
    },
  },
  plugins: [],
}