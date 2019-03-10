const assert = require('assert');
const crequest = require('./request');

jest.setTimeout(20000);

describe('GET /api/news', () => {

  it('should return status code 200 and empty response', (done) => {
    crequest
      .get('/api/news')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(r => {
        assert.equal(r.body.news.length, 0);
        done();
      });
  });

  it('should return status code 200 and response with one item', (done) => {
    crequest
      .post('/admin/news')
      .send({ title: 'test title', message: 'test text' })
      .set('Accept', 'application/json')
      .expect(201)
      .then(res => {
        crequest
          .get('/api/news')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(r => {
            assert.equal(r.body.news.length, 1);
            assert.deepStrictEqual(r.body.news, [
              { _id: res.body._id, title: 'test title', message: 'test text' }
            ]);
            done();
          });
      });
  });

});
