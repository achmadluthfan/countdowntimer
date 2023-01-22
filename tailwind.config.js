// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    backgroundImage: {
      "default-image": "url('../../image/image/final image/indonesia.jpg')",
      "newyear-image": "url('../../image/image/final image/new-year.jpg')",
      "eid-image": "url('../../image/image/final image/eid-mubarak-1.jpg')",
      "chrismas-image": "url('../../image/image/final image/chrismas.jpg')",
      "seclusion-image": "url('../../image/image/final image/prambanan.jpg')",
      "vesak-image": "url('../../image/image/final image/borobudur.jpg')",
      "chinese-image": "url('../../image/image/final image/chinese.jpg')",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      changa: ["Changa", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
