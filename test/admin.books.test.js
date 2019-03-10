const assert = require('assert');
const crequest = require('./request');

jest.setTimeout(20000);

describe('GET /admin/books', () => {

  it('should return status code 200 and empty response', (done) => {
    crequest
      .get('/admin/books')
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
      .then(_=> {
        crequest
          .get('/admin/books')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(r => {
            assert.equal(r.body.books.length, 1);
            done();
          });
      });
  });

});

describe('POST /admin/books', () => {

  it('should error if title, source path and image path are not passed', (done) => {
    crequest
      .post('/admin/books')
      .send({})
      .set('Accept', 'application/json')
      .expect(422)
      .then(r => {
        assert.deepEqual(r.body, {
          errors: [
            '"image path" is required.',
            '"source path" is required.',
            '"title" is required.',
          ]
        });
        assert.strictEqual(r.body.errors.length, 3);
        done();
      })
  });

  it('should error if title is not passed', (done) => {
    crequest
      .post('/admin/books')
      .send({ sourcePath: 'test text', imagePath: 'path' })
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

  it('should return status code 201 and id of created book', (done) => {
    crequest
      .post('/admin/books')
      .send({ title: 'test title', sourcePath: 'testPath', imagePath: 'example.com/super.jpg' })
      .set('Accept', 'application/json')
      .expect(201)
      .then(r => {
        assert.notStrictEqual(r.body._id, undefined);
        done();
      })
  })

});

describe('GET /admin/books/:id', () => {

  it('should return status code 404 and message "not found"', (done) => {
    crequest
      .get('/admin/books/5c8452e2ec530f00109d92cc')
      .set('Accept', 'application/json')
      .expect(404)
      .then(r => {
        assert.equal(r.body.message, 'Not found');
        done();
      })
  });

  it('should return status code 200 and response with one item', (done) => {
    crequest
      .post('/admin/books')
      .send({ title: 'test title', sourcePath: 'testPath', imagePath: 'example.com/super.jpg' })
      .set('Accept', 'application/json')
      .then(r => {
        crequest
          .get(`/admin/books/${r.body._id}`)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(res => {
            assert.equal(r.body._id, res.body._id);
            assert.deepStrictEqual(res.body, {
              _id: r.body._id,
              title: 'test title',
              sourcePath: 'testPath',
              imagePath: 'example.com/super.jpg' });
            done();
          });
      });
  });

});

describe('PUT /admin/books/:id', () => {

  it('should return status code 404 and message "not found"', (done) => {
    crequest
      .put('/admin/books/1')
      .set('Accept', 'application/json')
      .expect(404)
      .then(r => {
        assert.equal(r.body.message, 'Not found');
        done();
      })
  });

  it('should return status code 422 and response with error if sourcePath is not passed', (done) => {
    crequest
      .post('/admin/books')
      .send({ title: 'test title', sourcePath: 'testPath', imagePath: 'example.com/super.jpg' })
      .set('Accept', 'application/json')
      .then(r => {
        crequest
          .put(`/admin/books/${r.body._id}`)
          .send({ title: 'new title', imagePath:'example.com/super.jpg' })
          .set('Accept', 'application/json')
          // .expect('Content-Type', /json/)
          .expect(422)
          .then(res => {
            assert.deepEqual(res.body, {
              errors: ['"source path" is required.']
            });
            assert.strictEqual(res.body.errors.length, 1);
            done();
          });
      });
  });

  it('should return status code 422 and response with error if anything is not passed', (done) => {
    crequest
      .post('/admin/books')
      .send({ title: 'test title', sourcePath: 'testPath', imagePath: 'example.com/super.jpg' })
      .set('Accept', 'application/json')
      .then(r => {
        crequest
          .put(`/admin/books/${r.body._id}`)
          .send({})
          .set('Accept', 'application/json')
          .expect(422)
          .then(res => {
            assert.deepStrictEqual(res.body.errors, [
              '"title" is required.',
              '"source path" is required.',
              '"image path" is required.'
            ]);
            assert.strictEqual(res.body.errors.length, 3);
            done();
          });
      });
  });

  it('should modify book if all data is passed', (done) => {
    crequest
      .post('/admin/books')
      .send({ title: 'old title', sourcePath: 'old message', imagePath: 'path'})
      .set('Accept', 'application/json')
      .then(r => {
        crequest
          .put(`/admin/books/${r.body._id}`)
          .send({ title: 'new title', sourcePath: 'new message', imagePath: 'path' })
          .set('Accept', 'application/json')
          .expect(204)
          .then(_ => {
            crequest
              .get(`/admin/books/${r.body._id}`)
              .set('Accept', 'application/json')
              .expect(200)
              .then(res => {
                assert.equal(res.body.title, 'new title');
                assert.equal(res.body.sourcePath, 'new message');
                assert.equal(res.body.imagePath, 'path');
                done();
              })
          });
      });
  });


});

describe('DELETE /admin/books/:id', () => {

  it('should return status code 404 and message "not found"', (done) => {
    crequest
      .delete('/admin/books/5c8452e2ec530f00109d92cc')
      .set('Accept', 'application/json')
      .expect(404)
      .then(r => {
        assert.equal(r.body.message, 'Not found');
        done();
      })
  });

  it('should return status code 404 when try to get deleted book', (done) => {
    crequest
      .post('/admin/books')
      .send({ title: 'test title', sourcePath: 'testPath', imagePath: 'example.com/super.jpg' })
      .set('Accept', 'application/json')
      .then(r => {
        crequest
          .delete(`/admin/books/${r.body._id}`)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(res => {
            assert.equal(res.body.message, `Book with id ${r.body._id} was successfully deleted.`);
            crequest
              .get(`/admin/books/${r.body._id}`)
              .expect(404)
              .then(_=> {
                  done();
                }
              );
          });
      });
  });

});