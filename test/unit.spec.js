const express = require('express');
const path = require('path');
const expect = require('chai').expect;
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

describe("Unit Tests", () => {
  let pageObject = null;
  let url = "http://localhost:3000";

  before(done => {
    pageObject = app.listen(3000);
    done();
  });

  after(done => {
    pageObject.close();
    done();
  });

  it('page should load', () => {
    axios.get(url)
      .then(r => expect(r.status === 200))
      .catch(err => console.log(err))
  })

});