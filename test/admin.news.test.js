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

  it('should error if title and message are not passed', (done) => {
    crequest
      .post('/admin/news')
      .send({})
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

  it('should error if title is not passed', (done) => {
    crequest
      .post('/admin/news')
      .send({ message: 'test text' })
      .set('Accept', 'application/json')
      .expect(422)
      .then(r => {
        assert.deepEqual(r.body, {
          errors: ['"title" is required.']
        });
        assert.strictEqual(r.body.errors.length, 1);
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
      .get('/admin/news/5c8452e2ec530f00109d92cc')
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

describe('PUT /admin/news/:id', () => {

  it('should return status code 404 and message "not found"', (done) => {
    crequest
      .put('/admin/news/1')
      .set('Accept', 'application/json')
      .expect(404)
      .then(r => {
        assert.equal(r.body.message, 'Not found');
        done();
      })
  });

  it('should return status code 422 and response with error if message is not passed', (done) => {
    crequest
      .post('/admin/news')
      .send({ title: 'old title', message: 'old message'})
      .set('Accept', 'application/json')
      .then(r => {
        crequest
          .put(`/admin/news/${r.body._id}`)
          .send({ title: 'new title' })
          .set('Accept', 'application/json')
          // .expect('Content-Type', /json/)
          .expect(422)
          .then(res => {
            assert.deepEqual(res.body, {
              errors: ['"message" is required.']
            });
            assert.strictEqual(res.body.errors.length, 1);
            done();
          });
      });
  });

  it('should return status code 422 and response with error if title and message are not passed', (done) => {
    crequest
      .post('/admin/news')
      .send({ title: 'old title', message: 'old message'})
      .set('Accept', 'application/json')
      .then(r => {
        crequest
          .put(`/admin/news/${r.body._id}`)
          .send({})
          .set('Accept', 'application/json')
          .expect(422)
          .then(res => {
            assert.deepStrictEqual(res.body.errors, [
              '"title" is required.',
              '"message" is required.'
            ]);
            assert.strictEqual(res.body.errors.length, 2);
            done();
          });
      });
  });

  it('should modify news if title and message passed', (done) => {
    crequest
      .post('/admin/news')
      .send({ title: 'old title', message: 'old message'})
      .set('Accept', 'application/json')
      .then(r => {
        crequest
          .put(`/admin/news/${r.body._id}`)
          .send({ title: 'new title', message: 'new message' })
          .set('Accept', 'application/json')
          .expect(204)
          .then(_ => {
            crequest
              .get(`/admin/news/${r.body._id}`)
              .set('Accept', 'application/json')
              .expect(200)
              .then(res => {
                assert.equal(res.body.title, 'new title');
                assert.equal(res.body.message, 'new message');
                done();
              })
          });
      });
  });


});

describe('DELETE /admin/news/:id', () => {

  it('should return status code 404 and message "not found"', (done) => {
    crequest
      .delete('/admin/news/5c8452e2ec530f00109d92cc')
      .set('Accept', 'application/json')
      .expect(404)
      .then(r => {
        assert.equal(r.body.message, 'Not found');
        done();
      })
  });

  it('should return status code 404 when try to get deleted news', (done) => {
    crequest
      .post('/admin/news')
      .send({ title: 'test title', message: 'test text'})
      .set('Accept', 'application/json')
      .then(r => {
        crequest
          .delete(`/admin/news/${r.body._id}`)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(res => {
            assert.equal(res.body.message, `News with id ${r.body._id} was successfully deleted.`);
            crequest
              .get(`/admin/news/${r.body._id}`)
              .expect(404)
              .then(response => {
                  done();
                }
              );
          });
      });
  });

});