const express = require('express');
const nextJS = require('next');

async function start() {
  const dev = process.env.NODE_ENV !== 'production';
  const app = nextJS({dev});
  const server = express();
  await app.prepare();

  // Redirect all requests to main entrypoint pages/index.js
  server.get('/*', async (req, res, next) => {
    try {
      app.render(req, res, '/');
    } catch (e) {
      next(e);
    }
  });

  server.listen(3000, err => {
    if (err) throw err;
   
  });
}

start();