'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      
      Example:
     */
    return queryInterface.bulkInsert('Posts', [
      { title: 'MAMP PRO', body: 'Be more productive: unlimited hosts, unlimited possibilites.', views: (Math.random() * 100), userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'MAMP CLOUD', body: 'Save your hosts data and database to Dropbox.', views: (Math.random() * 22), userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'MAMP NEWS', body: 'Follow us on Twitter for the latest news and updates.', views: (Math.random() * 22), userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'PHP', body: 'phpinfo shows the current configuration of PHP.', views: (Math.random() * 22), userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'MySQL', body: 'MySQL can be administered with phpMyAdmin', views: (Math.random() * 22), userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'PHP-Caches', body: 'APC (not loaded)', views: (Math.random() * 22), userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'phpMyAdmin', body: 'Configure your MySQL databases with phpMyAdmin.', views: (Math.random() * 22), userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'phpLiteAdmin', body: 'phpLiteAdmin needs PHP 5.2.4 to 7.0.x', views: (Math.random() * 22), userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Examples', body: 'Connect via network', views: (Math.random() * 22), userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Welcome to MAMP', body: 'Your version is 5.0.1 and up to date', views: (Math.random() * 22), userId: 1, createdAt: new Date(), updatedAt: new Date() },
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
