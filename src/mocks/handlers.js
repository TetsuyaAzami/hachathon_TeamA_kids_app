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
  rest.get("/courses", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        courses: [
          { id: 1, title: "インターネット", img: "q_1.png" },
          { id: 2, title: "リクエストとレスポンス", img: "q_2.png" },
          { id: 3, title: "HTTP", img: "q_3.png" },
          { id: 4, title: "URL", img: "q_4.png" },
        ],
      })
    );
  }),
  rest.get("/courses/1", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        courses: [{ id: 1, title: "インターネット", img: "q_1.png" }],
      })
    );
  }),
];
