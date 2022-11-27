/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

const { getTailColors } = require("@juel/hooks/tailwind");

const colors = { main: "", sec: "", neu: "" };
const tailColors = getTailColors(colors);

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
        banner:
          "url('https://cdn.dribbble.com/users/2103205/screenshots/14694072/media/aeb45d37e8031342f0feb16ce51dcc22.jpg?compress=1&resize=1000x750&vertical=top')",
        ad: "url('https://static.vecteezy.com/system/resources/thumbnails/003/663/127/original/purple-light-particle-line-fall-background-loop-animation-free-video.jpg')",
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
