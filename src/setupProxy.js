const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api/",
    proxy({
      target: "https://www.jailbase.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "https://www.jailbase.com/api/",
      },
    })
  );
};
