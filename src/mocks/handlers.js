import { rest } from "msw";
export const handlers = [
  // Handles a POST /login request
  rest.get("/login", (req, res, ctx) => {
    console.log("/loginでgetメソッドを送りました");
    return res(
      ctx.status(200),
      ctx.json({
        message: "Hello World!",
      })
    );
  }),
  //ホームページAPIモック
  rest.get("/courses", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        courses: [
          { id: 1, title: "インターネットの仕組み", img: "q_1.png" },
          { id: 2, title: "コンピューターの仕組み", img: "q_2.png" },
          { id: 3, title: "通信の仕組み", img: "q_3.png" },
          { id: 4, title: "アプリって何？", img: "q_4.png" },
          { id: 5, title: "プログラム作りの流れ", img: "q_5.png" },
          { id: 6, title: "分からないことは聞いてみよう!", img: "q_6.png" },
        ],
      })
    );
  }),

  //クイズページAPIモック
  rest.get("/courses/1", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        quizzes: [
          {
            /////////テーブル名 カラム名
            id: 1, //quizzes quiz_id → eをつけるならつけるで揃えましょう
            question: "インターネットの入り口ってどこかな？", //quizzes quiestion
            description:
              "クローム、サファリ、エッジなどから見たいページにアクセスするよ。", //quizzes description
            title: "インターネットの仕組み", //couseIdに対応するタイトル(course1ならcourse1のタイトル) courses id
            answers: [
              { id: 1, answer: "ブラウザ", is_answer: true }, //answers id,answer,is_answer
              { id: 2, answer: "電源ボタン", is_answer: false },
            ],
          },
          {
            /////////テーブル名 カラム名
            id: 2, //quizzes quiz_id → eをつけるならつけるで揃えましょう
            question: "見たいサイト（ページ）は何が探してくれる？", //quizzes quiestion
            description:
              "ニュースやユーチューブのサイト（ページ）を代わりに探してくれるよ。", //quizzes description
            title: "インターネットの仕組み", //couseIdに対応するタイトル(course1ならcourse1のタイトル) courses id
            answers: [
              { id: 3, answer: "三太郎", is_answer: false }, //answers id,answer,is_answer
              { id: 4, answer: "サーバー", is_answer: true },
            ],
          }, //....id: 4まで続く
        ],
      })
    );
  }),
  rest.get("/courses/2", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        quizzes: [
          {
            id: 5,
            question:
              "パソコンやスマホを動かすために必要なシステムを何という？",
            description:
              "ウインドウズ（Windows）やマック（Mac）がよく知られているよ。",
            title: "コンピューターの仕組み",
            answers: [
              {
                id: 9,
                answer: "オペレーティングシステム（OS）",
                is_answer: true,
              },
              { id: 10, answer: "システムキッチン", is_answer: false },
            ],
          },
        ],
      })
    );
  }),
  //courses/5まで続く
];
