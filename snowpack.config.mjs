/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: [
    "@snowpack/plugin-postcss",
    "@jadex/snowpack-plugin-tailwindcss-jit",
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-dotenv",

    "@snowpack/plugin-typescript",

    [
      "@snowpack/plugin-webpack",
      {
        extendConfig: (config) => {
          config.module.rules.push({
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
                targets: "> 0.25%, not dead",
                plugins: [
                  ["@babel/plugin-transform-runtime", { regenerator: true }], // some packages could require this plugin
                ],
              },
            },
          });

          return config;
        },
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: "routes", src: ".*", dest: "/index.html" },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },

  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  buildOptions: {
    /* ... */
  },
};
