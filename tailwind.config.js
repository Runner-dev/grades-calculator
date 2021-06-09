module.exports = {
  mode: "jit",
  purge: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx,vue,svelte}"],
  darkMode: "media",
  theme: {
    flexGrow: {
      0: 0,
      DEFAULT: 1,
      2: 2,
    },
  },
};
