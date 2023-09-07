module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_d6": "#000000d6",
          "900_e8": "#000000e8",
        },
        white: {
          A700_7f: "#ffffff7f",
          A700_cc: "#ffffffcc",
          A700_e5: "#ffffffe5",
          A700_28: "#ffffff28",
          A700: "#ffffff",
        },
        deep_orange: {
          300: "#ff8d58",
          400: "#e6793c",
          A200: "#f27135",
          "400_01": "#f4854c",
          "800_00": "#c64d1500",
          "300_02": "#f6864e",
          "300_01": "#fa8953",
        },
        lime: { "900_5f": "#945e415f" },
        red: { 200: "#d4af9d", 300: "#cd7676", "400_bc": "#c46e3ebc" },
        yellow: { "900_55": "#f2761355" },
        pink: { 800: "#a73159", "800_00": "#a7315900" },
        blue_gray: { 100: "#d9d9d9", 900: "#2d2b2b" },
        gray: {
          100: "#f6f6f6",
          500: "#999999",
          900: "#410101",
          "900_01": "#1a1a1a",
          "700_00": "#634e4400",
        },
      },
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
        montserrat: "Montserrat",
        inter: "Inter",
      },
      boxShadow: {
        bs1: "0px 1px  80px 0px #ffffff28",
        bs: "0px 4px  5px 0px #0000007f",
      },
      backgroundImage: {
        gradient: "linear-gradient(138deg ,#410101,#a73159,#a7315900)",
        gradient1: "linear-gradient(236deg ,#d4af9d,#f2761355,#c64d1500)",
        gradient2:
          "linear-gradient(130deg ,#ff8d58,#fa8953,#f6864e,#f4854c,#e6793c,#c46e3ebc,#945e415f,#634e4400)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
