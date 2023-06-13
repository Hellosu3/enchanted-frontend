const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://enchantedbackend.herokuapp.com', // Replace with your Express server's URL
      changeOrigin: true,
    })
  );
};
