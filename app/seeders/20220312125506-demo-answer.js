'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('answers', [
      {answer: 'ブラウザ', is_answer:true , quizId:1, createdAt: new Date(), updatedAt: new Date()},
      {answer: '電源ボタン', is_answer:false , quizId:1, createdAt: new Date(), updatedAt: new Date()},
      {answer: '三太郎', is_answer:false , quizId:2, createdAt: new Date(), updatedAt: new Date()},
      {answer: 'サーバー', is_answer:true , quizId:2, createdAt: new Date(), updatedAt: new Date()},
      {answer: '電話', is_answer:false , quizId:3, createdAt: new Date(), updatedAt: new Date()}, 
      {answer: '信号', is_answer:true , quizId:3, createdAt: new Date(), updatedAt: new Date()}, 
      {answer: '見れない', is_answer:true , quizId:4, createdAt: new Date(), updatedAt: new Date()},
      {answer: '見れる', is_answer:false , quizId:4, createdAt: new Date(), updatedAt: new Date()}, 
      {answer: 'ｵﾍﾟﾚｰﾃｲﾝｸﾞｼｽﾃﾑ（OS)', is_answer:true , quizId:5, createdAt: new Date(), updatedAt: new Date()}, 
      {answer: 'システムキッチン', is_answer:false , quizId:5, createdAt: new Date(), updatedAt: new Date()},
      {answer: 'GPS（ジー・ピー・エス）', is_answer:false , quizId:6, createdAt: new Date(), updatedAt: new Date()},
      {answer: 'CPU（シー・ピー・ユー）', is_answer:true , quizId:6, createdAt: new Date(), updatedAt: new Date()},
      {answer: 'アベレージ', is_answer:false , quizId:7, createdAt: new Date(), updatedAt: new Date()}, 
      {answer: 'ストレージ', is_answer:true , quizId:7, createdAt: new Date(), updatedAt: new Date()}, 
      {answer: 'メモリ', is_answer:true , quizId:8, createdAt: new Date(), updatedAt: new Date()},
      {answer: 'マウス', is_answer:false , quizId:8, createdAt: new Date(), updatedAt: new Date()}, 
      {answer: 'プロバイダ', is_answer:true , quizId:9, createdAt: new Date(), updatedAt: new Date()}, 
      {answer: '学校', is_answer:false , quizId:9, createdAt: new Date(), updatedAt: new Date()},
      {answer: '電話番号', is_answer:false , quizId:10, createdAt: new Date(), updatedAt: new Date()}, 
      {answer: 'メールアドレス', is_answer:true , quizId:10, createdAt: new Date(), updatedAt: new Date()},
      {answer: '送られない', is_answer:true , quizId:11, createdAt: new Date(), updatedAt: new Date()}, 
      {answer: '送られる', is_answer:false , quizId:11, createdAt: new Date(), updatedAt: new Date()},
      {answer: 'URL（ユー・アール・エル）', is_answer:true , quizId:12, createdAt: new Date(), updatedAt: new Date()},  
      {answer: 'JR（ジェイアール）', is_answer:false , quizId:12, createdAt: new Date(), updatedAt: new Date()}, 
      {answer: 'LINE（ライン）', is_answer:true , quizId:13, createdAt: new Date(), updatedAt: new Date()}, 
      {answer: 'iPhone（アイフォン）', is_answer:false , quizId:13, createdAt: new Date(), updatedAt: new Date()}, 
      {answer: 'スマホ', is_answer:true , quizId:14, createdAt: new Date(), updatedAt: new Date()},  
      {answer: 'インターネット', is_answer:false , quizId:14, createdAt: new Date(), updatedAt: new Date()}, 
      {answer: 'アイコン', is_answer:false , quizId:15, createdAt: new Date(), updatedAt: new Date()},  
      {answer: 'ソフトウェア', is_answer:true , quizId:15, createdAt: new Date(), updatedAt: new Date()}, 
      {answer: 'ログイン', is_answer:false , quizId:16, createdAt: new Date(), updatedAt: new Date()}, 
      {answer: 'プログラム', is_answer:true , quizId:16, createdAt: new Date(), updatedAt: new Date()},
    
    ]);
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('answers', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
