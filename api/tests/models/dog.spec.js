const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dog.create({ name: 'Pug' });
      });
      it('should throw an error if height is null', (done) =>{
        Dog.create({
          name: "Matias",
          weight: {metric: '23 - 29'},
        })
          .then(() => done(new Error('height is require')))
          .catch(() => done());        
      })
      it('should throw an error if weight is null', (done) =>{
        Dog.create({
          name: "Matias",
          height: {metric: '40 - 52'},
        })
          .then(() => done(new Error('weight is require')))
          .catch(() => done());        
      })
      it('should throw an error if created_by_me is not el boolean', (done) =>{
        Dog.create({
          name: "Matias",
          height: {metric: '40 - 52'},
          weight: {metric: '23 - 29'},
          created_by_me: "hola mundo"
        })
          .then(() => done(new Error('created_by_me is invalid')))
          .catch(() => done());
      })

    });
  });
});
