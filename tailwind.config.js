module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins, sans-serif",
      },
      backgroundImage: {
        "gradient-sky-purple-pink":
          "linear-gradient(to right, #0ea5e9, #8b5cf6, #ec4899)",
      },
      backgroundClip: {
        text: "text",
      },
      colors: {
        "light-content": "#A7A7A7",
        "dark-heading": "#1f2428",
        "dark-content": "#666666",
        "light-heading": "#CCCCCC",
        "dark-mode": "#1f1f1f",
        "dark-card": "#363636",
      },
      boxShadow: {
        dark: "0px 2px 2px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities(
        {
          ".bg-gradient": {
            "background-image": theme(
              "backgroundImage.gradient-sky-purple-pink"
            ),
          },
          ".text-gradient": {
            "background-clip": theme("backgroundClip.text"),
            "background-image": theme(
              "backgroundImage.gradient-sky-purple-pink"
            ),
            color: "transparent",
          },
          ".max-width": {
            "margin-left": "auto",
            "margin-right": "auto",
            "padding-left": theme("spacing.5"),
            "padding-right": theme("spacing.5"),
            "@screen lg": {
              "padding-left": theme("spacing.24"),
              "padding-right": theme("spacing.24"),
            },
            "@screen xl": {
              "padding-left": theme("spacing.48"),
              "padding-right": theme("spacing.48"),
            },
          },
        },
        ["responsive"]
      );
    },
  ],
};
