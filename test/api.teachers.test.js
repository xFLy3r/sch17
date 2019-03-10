const assert = require('assert');
const crequest = require('./request');

jest.setTimeout(20000);

describe('GET /api/teachers', () => {

  it('should return status code 200 and empty response', (done) => {
    crequest
      .get('/api/teachers')
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
      .send({ name: 'Ivan', subject: 'test subject' })
      .set('Accept', 'application/json')
      .expect(201)
      .then(res => {
        crequest
          .get('/api/teachers')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(r => {
            assert.equal(r.body.teachers.length, 1);
            assert.deepStrictEqual(r.body.teachers, [
              { _id: res.body._id, name: 'Ivan', subject: 'test subject' }
            ]);
            done();
          });
      });
  });

});
