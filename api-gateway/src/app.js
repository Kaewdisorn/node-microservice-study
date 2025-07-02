const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy ไปยัง auth-service
// app.use('/auth', createProxyMiddleware({
//   target: process.env.AUTH_SERVICE_URL,
//   changeOrigin: true,
//   pathRewrite: {
//     '^/auth': '', // ลบ prefix /auth ออก (ส่งตรงไปยัง auth-service)
//   }
// }));

// ทดสอบดูว่าตัว gateway ยังทำงาน
app.get('/', (req, res) => {
  res.send('🧭 API Gateway is up and running!');
});

module.exports = app;
