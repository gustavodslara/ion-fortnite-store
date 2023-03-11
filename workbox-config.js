module.exports = {
  globDirectory: "www",
  globPatterns: ["**/*.{html,js,css,png,jpg,jpeg,svg}"],
  swDest: "www/sw.js",
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: new RegExp("/*"),
      handler: "NetworkFirst",
    },
  ],
};
