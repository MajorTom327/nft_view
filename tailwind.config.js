/** @type {import('tailwindcss').Config} */

const chroma = require('chroma-js');
const R = require('ramda');

const colors = {
  primary: "#003566",
  // primary: "#b8c0ff",
  secondary: "#ffd60a",
  // secondary: "#c8b6ff",
  accent: "#ff4d4f",
  // accent: "#9bf6ff",
  base: "#001d3d",
  // base: "#e0fbfc",
  // base: "#ffd6ff",

  light: "#ffffff",
  dark: "#000814",
}

const colorModifier = {
  light: 1,
  dark: 1,
};

const toLight = (color) => chroma(color).brighten(colorModifier.light).hex();
const toDark = (color) => chroma(color).darken(colorModifier.light).hex();
const getContentColor = (color) =>
  chroma.contrast(color, colors.light) > 4.5 ? colors.light : colors.dark;

module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        ...Object.keys(colors).reduce((acc, color) => {
          const currentColor = R.prop(color, colors);

          return R.compose(
            R.assoc(color, currentColor),
            R.assoc(`${color}-focus`, toLight(currentColor)),
            R.assoc(`${color}-lighten`, toLight(currentColor)),
            R.assoc(`${color}-darken`, toDark(currentColor)),
            R.assoc(`${color}-content`, getContentColor(currentColor)),
          )(acc)
        }, {}),
      }
    },
  },
  plugins: [],
}
