/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

const { getTailColors } = require("@juel/hooks/tailwind");

const colors = { main: "", sec: "", neu: "" };
const tailColors = getTailColors(colors);
const bannerImages = [
  "https://images.pexels.com/photos/957040/night-photograph-starry-sky-night-sky-star-957040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const x = Math.floor(Math.random() * bannerImages.length);
const banner = `url('${bannerImages[x]}')`;
const ad =
  "url('https://static.vecteezy.com/system/resources/thumbnails/003/663/127/original/purple-light-particle-line-fall-background-loop-animation-free-video.jpg')";
const service =
  "url('https://c4.wallpaperflare.com/wallpaper/378/293/186/artistic-neon-purple-hd-wallpaper-preview.jpg')";
const featured = "url('https://wallpapercave.com/wp/wp3474950.jpg')";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xxs: "400px",
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1600px",
    },
    extend: {
      colors: tailColors,
      backgroundImage: {
        banner,
        ad,
        service,
        featured,
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    // ...
  ],
};
