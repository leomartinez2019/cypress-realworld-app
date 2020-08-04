const createProxyMiddleware = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/login", "/callback", "/logout", "/checkAuth"], {
      target: `http://127.0.0.1:3001`,
      changeOrigin: true,
      logLevel: "debug",
    })
  );
};
