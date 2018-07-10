'use strict';

const faker = require("faker");

 let users = [
   {
    id: 1,
    username: "emily",
    email: "emily@test.com",
    password: "123123",
    createdAt: new Date(),
    updatedAt: new Date(),
    role: "standard"
   },
   {
    id: 2,
    username: "Jane",
    email: "jane@test.com",
    password: "123123",
    createdAt: new Date(),
    updatedAt: new Date(),
    role: "premium"
   },
   {
    id: 3,
    username: "Katelin",
    email: "katelin@test.com",
    password: "123123",
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