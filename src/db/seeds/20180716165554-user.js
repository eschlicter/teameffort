'use strict';

const faker = require("faker");

let users = [{
  id: -1, 
  username: "emilyschlicter",
  email: "emily@test.com",
  password: "1234567890",
  createdAt: new Date(),
  updatedAt: new Date(),
  role: "standard"
},
{
id: -2,
username: "janecurtis",
email: "jane@test.com",
password: "1234567890",
createdAt: new Date(),
updatedAt: new Date(),
role: "premium"
},
{
  id: -3,
  username: "brookekhan",
  email: "brooke@test.com",
  password: "1234567890",
  createdAt: new Date(),
  updatedAt: new Date(),
  role: "admin"
}

];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};