const assert = require('assert');
const crequest = require('./request');

jest.setTimeout(20000);

describe('GET /api/books', () => {

  it('should return status code 200 and empty response', (done) => {
    crequest
      .get('/api/books')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(r => {
        assert.equal(r.body.books.length, 0);
        done();
      });
  });

  it('should return status code 200 and response with one item', (done) => {
    crequest
      .post('/admin/books')
      .send({ title: 'test title', sourcePath: 'testPath', imagePath: 'example.com/super.jpg' })
      .set('Accept', 'application/json')
      .expect(201)
      .then(res => {
        crequest
          .get('/api/books')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(r => {
            assert.equal(r.body.books.length, 1);
            assert.deepStrictEqual(r.body.books, [
              { _id: res.body._id, title: 'test title', sourcePath: 'testPath', imagePath: 'example.com/super.jpg' }
            ]);
            done();
          });
      });
  });

});
