/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pano: ["Panoptica W00 Script"],
       
        allerta: ['Allerta Stencil'],
        inter:['Inter'],
      
        64:['Sixtyfour'],
        whisper:["Whisper"],
        pacifico:["Pacifico"],
        montserrat:["Montserrat"],
       
      },
      colors:{
        primary:'#0b3488'
      }
    },
  },
  plugins: [],
}

