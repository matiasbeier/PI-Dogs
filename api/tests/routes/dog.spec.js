/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
  height: {metric: '25 - 35'},
  weight: {metric: '4 - 7'},
};

describe('Dog routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));


  describe('GET /dogs', () => {

    it("should get a status 200  when name is found", () =>
    agent.get("/dogs?name=bull").expect(200));

    it("should response with 1", () =>
    agent.get("/dogs?name=Affenpinscher").then((res) =>{
      console.log(res.body)
      expect(res.body[0].id).equal(1)
    }));
  });


  describe("GET /dogs/:id", () => {

    it("should response with status 200  when id is found", () => {
      agent.get("/dogs/5").expect(200)
    }) 

    it("should response with status 404  when dogs id isnt found", () =>{
      agent.get("/dogs/159753").expect(404);
    })

    it("should response with ", () =>
    agent.get("/dogs/2").then((res) =>{
      expect(res.body.name).equal("Afghan Hound")
    }));
  });
});