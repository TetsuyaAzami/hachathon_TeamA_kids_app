'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('quizzes', [
      {question: 'インターネットの入り口ってどこかな？', description:'クローム、サファリ、エッジ、サファリ、エッジなどからみたいページにアクセスするよ', course_id:1, createdAt: new Date(), updatedAt: new Date()},
      {question: '見たいサイト（ページ））は何が探してくれる？', description:'ニュースやユーチューブのサイト（ページ）を代わりに探してくれるよ。', course_id:1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'そのサーバーまではどうやって連絡がいく？', description:'空気中を飛び回っている電波や電線を伝って信号がサーバーにつながるよ。', course_id:1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'サーバーからの返事はそのまま見れるでしょうか？', description:'サーバーからの信号は見れないので、ブラウザが見れるようにしてくれるよ。', course_id:1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'パソコンやスマホを動かすために必要なシステムを何という？', description:'ウインドウズ（Windows）やマック（Mac）がよく知られているよ。', course_id:2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'そのシステムは何がないと動かない？', description:'色んな計算をして仕事をしているので、それが無いとシステムが動かないよ。', course_id:2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'パソコンやスマホに残したいデータを記憶させるものを何という？', description:'昔はハードディスクと言ってたよ。最近はストレージと呼んだ方がいいね。', course_id:2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'パソコンやスマホの？？？が大きくないと動きがぎこちなくなる？', description:'色んな仕事をするための机みたいなものだよ。大きい方がいろいろ同時にできるね。', course_id:2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'インターネットとつながるためにお手伝いしてくれるのは？', description:'インターネットはプロバイダっていう会社がないとつながらないよ。', course_id:3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'お友達にメールを送る時は何を入力しないと届かない？', description:'アマゾンも住所が分からないと届かないのと同じでメールもアドレスを入れるよ。', course_id:3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'そのメールはお友達のパソコンにまっすぐ送られる？', description:'そのメールはまずメールサーバー（ゆうびんきょくみたいなもの）に送られるよ。', course_id:3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'インターネットで見られるサイトの住所（アドレス）を何て言う？', description:'どのページにも住所があるよ。サーバーがないといろんなページが見れなんだ。', course_id:3, createdAt: new Date(), updatedAt: new Date()},
      {question: '次のうちどっちがアプリでしょう？', description:'アプリにはゲーム、SNS（ツイッターやインスタ）などいろいろあるよ。', course_id:4, createdAt: new Date(), updatedAt: new Date()},
      {question: 'アプリが動いている場所はどっちでしょう？', description:'もちろんパソコンやタブレットでも動いているし、サーバーでも動いているんだよ。', course_id:4, createdAt: new Date(), updatedAt: new Date()},
      {question: 'アプリを別の名前でいうと？', description:'スマホの中ではアプリ、パソコンの世界ではソフトと言われることが多いよ。', course_id:4, createdAt: new Date(), updatedAt: new Date()},
      {question: 'アプリを動かす仕組みのことを何と言う？', description:'アプリ以外でも車やロボットなども自動で動かすこともできるんだ。', course_id:4, createdAt: new Date(), updatedAt: new Date()},

    ]);
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('quizzes', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
