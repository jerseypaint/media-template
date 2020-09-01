import Typography from "typography"

const typography = new Typography({
  includeNormalize: false,
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  scaleRatio: 4,
  bodyGrayHue: "cool",
  headerGrayHue: "cool",
  headerFontFamily: [
    "Judson",
    "Georgia",
    "serif",
  ],
  bodyFontFamily: ["Quicksand", "Arial", "san-serif"],
  googleFonts: [
    {
      name: 'Judson',
      styles: [
        '700',
      ],
    },
    {
      name: 'Merriweather',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
})

export default typography