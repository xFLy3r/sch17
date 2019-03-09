const mongoose = require('mongoose');

beforeAll(async (done) => {
  await mongoose
    .connect('mongodb://mongodb:27017/testsch17', { useNewUrlParser: true })
    .then((r) => {
      clearDatabase();
      return done();
    })
});

afterAll(async (done) => {
  await mongoose.disconnect();
  return done();
});


beforeEach(async (done) => {
  await clearDatabase();
  return done();
});

let clearDatabase = () => {
  for (let i in mongoose.connection.collections) {
    mongoose.connection.collections[i].deleteMany(_=>{});
  }
};