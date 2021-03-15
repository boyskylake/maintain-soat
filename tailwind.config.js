const colors = require("tailwindcss/colors");

module.exports = {
    important:true,
    purge: ["./resources/js/**/*.js", "./resources/js/**/*.jsx"],
    darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        // backgroundImage: theme => ({
        //     'hero-lg': "url('/Images/Utils/bg.jpg`')",
        //     'hero-sm': "url('/Images/Utils/bg.jpg`')",
        //    }),
        colors: {
            //   custompink: {
            //   '100': '#FFE4F8',
            //   '200': '#DB98B5',
            //   '300': '#EF7AD6',
            //   '400': '#C755B1',
            //   '500': '#D3468F',
            //   '600': '#B42574',
            //   '700': '#96005B',
            //   '800': '#780042',
            //   '900': '#5A002B',
            // },
            custom: {
                "50": "#EAF7FC",
                "100": "#D2EDF6",
                "200": "#BAE4EF",
                "300": "#ACE0EE",
                "400": "#95DAF5",
                "500": "#5FBEEB",
                "600": "#3766B1",
                "700": "#28499E",
                "800": "#223E7E",
                "900": "#072268"
            },

        }
    },
    colors: {
        yellow: colors.yellow,
        gray: colors.coolGray,
        orange: colors.orange,
        blue: colors.blue,
        emerald: colors.emerald,
        red: colors.red,
        green: colors.green,
        cyan: colors.cyan,
        pink: colors.pink,
        indigo: colors.indigo,
        lightBlue: colors.lightBlue,
        teal: colors.teal,
        rose: colors.rose,
        amber: colors.amber,
        lime: colors.lime,
        black: colors.black,
        white: colors.white
        // custom: colors.lightBlue
    },
  },
  variants: {textColor: ["responsive", "hover", "focus", "group-hover"],
  // animation: ['responsive', 'motion-safe', 'motion-reduce'],
  backgroundColor: [
      "responsive",
      "hover",
      "focus",
      "checked",
      "group-focus",
      "odd",
      "even"
  ],
  shadow: ["responsive", "hover", "focus", "group-hover"],
  borderColor: ["active", "hover", "focus", "odd", "even"],
  fontWeight: ["hover", "focus"],
  ringWidth: ["hover", "active"],
  ringColor: ["hover", "active"],
  backgroundClip: ["hover", "focus"],
  padding: ["hover", "focus"],
  zIndex: ["hover", "active"],
  translate: ["active", "group-hover", "hover"],
  animation: ["hover", "focus"],
    extend: {},
  },
  plugins: [],
}
