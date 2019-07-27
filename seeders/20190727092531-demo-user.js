'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'demo@demo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'JohnA',
      lastName: 'DoeA',
      email: 'demo@demo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'JohnB',
      lastName: 'DoeB',
      email: 'demo@demo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'JohnC',
      lastName: 'DoeC',
      email: 'demo@demo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'JohnD',
      lastName: 'DoeD',
      email: 'demo@demo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'JohnE',
      lastName: 'DoeE',
      email: 'demo@demo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
