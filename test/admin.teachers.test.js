const assert = require('assert');
const crequest = require('./request');

jest.setTimeout(20000);

describe('GET /admin/teachers', () => {

  it('should return status code 200 and empty response', (done) => {
    crequest
      .get('/admin/teachers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(r => {
        assert.equal(r.body.teachers.length, 0);
        done();
      });
  });

  it('should return status code 200 and response with one item', (done) => {
    crequest
      .post('/admin/teachers')
      .send({ name: 'name', subject: 'subject' })
      .set('Accept', 'application/json')
      .expect(201)
      .then(_=> {
        crequest
          .get('/admin/teachers')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(r => {
            assert.equal(r.body.teachers.length, 1);
            done();
          });
      });
  });

});

describe('POST /admin/teachers', () => {

  it('should error if name and subject are not passed', (done) => {
    crequest
      .post('/admin/teachers')
      .send({})
      .set('Accept', 'application/json')
      .expect(422)
      .then(r => {
        assert.deepStrictEqual(r.body.errors, [
          '"subject" is required.',
          '"name" is required.'
        ]);
        assert.strictEqual(r.body.errors.length, 2);
        done();
      })
  });

  it('should error if name is not passed', (done) => {
    crequest
      .post('/admin/teachers')
      .send({ subject: 'new subject' })
      .set('Accept', 'application/json')
      .expect(422)
      .then(r => {
        assert.deepStrictEqual(r.body.errors, [
          '"name" is required.',
        ]);
        assert.strictEqual(r.body.errors.length, 1);
        done();
      })
  });

  it('should return status code 201 and id of created teacher', (done) => {
    crequest
      .post('/admin/teachers')
      .send({ name: 'new name', subject: 'new subject' })
      .set('Accept', 'application/json')
      .expect(201)
      .then(r => {
        assert.notStrictEqual(r.body._id, undefined);
        done();
      })
  })

});

describe('GET /admin/teachers/:id', () => {

  it('should return status code 404 and message "not found"', (done) => {
    crequest
      .get('/admin/teachers/5c8452e2ec530f00109d92cc')
      .set('Accept', 'application/json')
      .expect(404)
      .then(r => {
        assert.equal(r.body.message, 'Not found');
        done();
      })
  });

  it('should return status code 200 and response with one item', (done) => {
    crequest
      .post('/admin/teachers')
      .send({ name: 'test name', subject: 'test subject' })
      .set('Accept', 'application/json')
      .then(r => {
        crequest
          .get(`/admin/teachers/${r.body._id}`)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(res => {
            assert.equal(r.body._id, res.body._id);
            assert.deepStrictEqual(res.body, {
              _id: r.body._id,
              name: 'test name',
              subject: 'test subject' });
            done();
          });
      });
  });

});

describe('PUT /admin/teachers/:id', () => {

  it('should return status code 404 and message "not found"', (done) => {
    crequest
      .put('/admin/teachers/1')
      .set('Accept', 'application/json')
      .expect(404)
      .then(r => {
        assert.equal(r.body.message, 'Not found');
        done();
      })
  });

  it('should return status code 422 and response with error if name is not passed', (done) => {
    crequest
      .post('/admin/teachers')
      .send({ name: 'new name', subject: 'new subject' })
      .set('Accept', 'application/json')
      .then(r => {
        crequest
          .put(`/admin/teachers/${r.body._id}`)
          .send({ subject: 'new title' })
          .set('Accept', 'application/json')
          // .expect('Content-Type', /json/)
          .expect(422)
          .then(res => {
            assert.deepEqual(res.body, {
              errors: ['"name" is required.']
            });
            assert.strictEqual(res.body.errors.length, 1);
            done();
          });
      });
  });

  it('should return status code 422 and response with error if anything is not passed', (done) => {
    crequest
      .post('/admin/teachers')
      .send({ name: 'new name', subject: 'new subject' })
      .set('Accept', 'application/json')
      .then(r => {
        crequest
          .put(`/admin/teachers/${r.body._id}`)
          .send({})
          .set('Accept', 'application/json')
          .expect(422)
          .then(res => {
            assert.deepStrictEqual(res.body.errors, [
              '"name" is required.',
              '"subject" is required.'
            ]);
            assert.strictEqual(res.body.errors.length, 2);
            done();
          });
      });
  });

  it('should modify teacher if all data is passed', (done) => {
    crequest
      .post('/admin/teachers')
      .send({ name: 'old test name', subject: 'old testSubject' })
      .set('Accept', 'application/json')
      .then(r => {
        crequest
          .put(`/admin/teachers/${r.body._id}`)
          .send({ name: 'new name', subject: 'new subject' })
          .set('Accept', 'application/json')
          .expect(204)
          .then(_ => {
            crequest
              .get(`/admin/teachers/${r.body._id}`)
              .set('Accept', 'application/json')
              .expect(200)
              .then(res => {
                assert.equal(res.body.name, 'new name');
                assert.equal(res.body.subject, 'new subject');
                done();
              })
          });
      });
  });


});

describe('DELETE /admin/teachers/:id', () => {

  it('should return status code 404 and message "not found"', (done) => {
    crequest
      .delete('/admin/teachers/5c8452e2ec530f00109d92cc')
      .set('Accept', 'application/json')
      .expect(404)
      .then(r => {
        assert.equal(r.body.message, 'Not found');
        done();
      })
  });

  it('should return status code 404 when try to get deleted teacher', (done) => {
    crequest
      .post('/admin/teachers')
      .send({ name: 'test title', subject: 'testSubject' })
      .set('Accept', 'application/json')
      .then(r => {
        crequest
          .delete(`/admin/teachers/${r.body._id}`)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(res => {
            assert.equal(res.body.message, `Teacher with id ${r.body._id} was successfully deleted.`);
            crequest
              .get(`/admin/teachers/${r.body._id}`)
              .expect(404)
              .then(_=> {
                  done();
                }
              );
          });
      });
  });

});