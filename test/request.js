const request = require('supertest');
let app = () => {
  let app = require('express')();
  app.use(require('body-parser').json());
  app.use('/api', require('../api/router'));
  app.use('/admin', require('../admin/router'));
  return app;
};

module.exports = request(app());