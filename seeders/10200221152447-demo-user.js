'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Users', [
      { name: 'Majid Hassan', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Adham Aziz', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Aziz Fallatah', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Omar Almousa', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Adam Muhammad', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Muhammad Adam', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ali Tahir', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Omar Tahir', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Omar Hamza', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hamza Omar', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Muhammad Housa', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Saeed Tohi', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Eid Cool', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hatim Cool', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Amer Hassan', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Musa Adam', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ali SOSO', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Amin SOSO', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Issa Hussain', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jameel Hassan', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Khlid KBW', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hamza Do', age: (Math.random() * 40), createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
