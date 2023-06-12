const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4000', // Replace with your Express server's URL
      changeOrigin: true,
    })
  );
};
