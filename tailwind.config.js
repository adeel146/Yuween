/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
      screens: {
        'tablet-lg': {'min': '768px', 'max': '999px'},
        'tablet': {'min': '600px', 'max': '767px'},
        'xtra-small': { 'min': '520px', 'max': '599px'},
        'xxtra-small': { 'min': '370px', 'max': '510px'},
        // => @media (min-width: 640px) { ... }
      },
      backgroundImage: {
        'footerTop': "url('./assests/newDesign/footer_top.svg')",
        'banner': "url('./assests/banner.png')",
        'footerBg': "url('./assests/svg/Footerbackground.svg')",
        'notreImg': "url(./assests/notre.png)",
        'notreMobiity': "url(./assests/newDesign/notre_img.svg)",
        'helpSupport': "url(./assests/line.png)",
        'appImg': "url(./assests/app.png)",
        'votreImg': "url(./assests/svg/Vehicle renting.svg)",
        'contactImg': "url(./assests/contact.png)",
        'rentImg': "url(./assests/newDesign/rent_car_bg_img.svg)",
        'footer_2_img': "url(./assests/newDesign/footer_2.svg)",
        'contact_img': "url(./assests/newDesign/contact_bg.svg)",
        'support_img': "url(./assests/newDesign/support_bg.svg)",
      }
    },

  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    }),
  ]
}