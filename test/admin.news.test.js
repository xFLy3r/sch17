const assert = require('assert');
const crequest = require('./request');

jest.setTimeout(20000);

describe('GET /api/news', () => {

  it('should return status code 200 and empty response', (done) => {
    crequest
      .get('/admin/news')
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
      .then(_=> {
        crequest
          .get('/admin/news')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(r => {
            assert.equal(r.body.news.length, 1);
            done();
          });
      });
  });

});

describe('POST /admin/news', () => {

  it('should error if title is not passed', (done) => {
    crequest
      .post('/admin/news')
      .send({ text: 'test text' })
      .set('Accept', 'application/json')
      .expect(422)
      .then(r => {
        assert.deepEqual(r.body, {
          errors: ['"message" is required.', '"title" is required.']
        });
        assert.strictEqual(r.body.errors.length, 2);
        done();
      })
  });

  it('should return status code 201 and created news', (done) => {
    crequest
      .post('/admin/news')
      .send({ title: 'test title', message: 'test text' })
      .set('Accept', 'application/json')
      .expect(201)
      .then(r => {
        assert.notStrictEqual(r.body._id, undefined);
        done();
      })
  })

});

describe('GET /admin/news/:id', () => {

  it('should return status code 404 and message "not found"', (done) => {
    crequest
      .get('/admin/news/1')
      .set('Accept', 'application/json')
      .expect(404)
      .then(r => {
        assert.equal(r.body.message, 'Not found');
        done();
      })
  });

  it('should return status code 200 and response with one item', (done) => {
    crequest
      .post('/admin/news')
      .send({ title: 'test title', message: 'test text'})
      .set('Accept', 'application/json')
      .then(r => {
        crequest
          .get(`/admin/news/${r.body._id}`)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(res => {
            assert.equal(r._id, res._id);
            done();
          });
      });
  });
});