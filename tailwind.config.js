module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        "Rubik":"'Rubik', sans-serif",
        "Kanit":"'Kanit', sans-serif"
      },
      colors:{
        "main-blue":"#138594",
        "sky":"#F9FDFF",
        "cardsky":"#F0F7FA",
        "buttonselect":"#DAF0FA"
      },
      minHeight:{
        "80":"20rem"
      },
      height:{
        "500":"500px"
      },
      boxShadow:{
        "realistic":`0 1px 1px rgba(0,0,0,0.12), 
        0 2px 2px rgba(0,0,0,0.12), 
        0 4px 4px rgba(0,0,0,0.12), 
        0 8px 8px rgba(0,0,0,0.12),
        0 16px 16px rgba(0,0,0,0.12);`
      },
      dropShadow:{
        "bg":`0 10px 15px rgba(0, 0, 0, 0.25)`
      },
      minWidth:{
        "300":"300px",
        "600":"600px",
        "1200":"1200px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
