import { colors } from "./src/app/styles/colors";
import { fontFamily } from "./src/app/styles/fontFamily";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: { colors: colors, fontFamily: fontFamily },
  },
  plugins: [],
};
