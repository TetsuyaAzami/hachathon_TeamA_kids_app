'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('courses', [
      {course_name: 'インターネットの仕組み', img: 'q_1.png', createdAt: new Date(), updatedAt: new Date()},
      {course_name: 'コンピューターの仕組み', img: 'q_2.png', createdAt: new Date(), updatedAt: new Date()}, 
      {course_name: '通信の仕組み', img: 'q_3.png', createdAt: new Date(), updatedAt: new Date()},
      {course_name: 'アプリって何？', img: 'q_4.png', createdAt: new Date(), updatedAt: new Date()},
      {course_name: 'プログラム作りの流れ', img: 'q_5.png', createdAt: new Date(), updatedAt: new Date()},
      {course_name: '分からないことは聞いてみよう！', img: 'q_6.png', createdAt: new Date(), updatedAt: new Date()},
    ]);
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('courses', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
