import merge from "lodash/merge";
import colors from "./colors";

const breakpoints = [
  ["phone_small", 320],
  ["phone", 376],
  ["phablet", 540],
  ["tablet", 735],
  ["desktop", 1070],
  ["desktop_medium", 1280],
  ["desktop_large", 1440],
];

const fonts = {
  serif: "'Merriweather', 'Georgia', Serif, 'Noto Serif JP'",
  sansSerif:
    "'-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif",
};

export default merge({
  colors,
  fonts,
  breakpoints,
});
