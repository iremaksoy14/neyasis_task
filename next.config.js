const withCSS = require("@zeit/next-css");
const withImages = require('next-images')
module.exports = withCSS({
  /* config options here */
  ...withImages(),
  future: {
      webpack5: true,
  },
  assets: ['./assets/fonts']
});
