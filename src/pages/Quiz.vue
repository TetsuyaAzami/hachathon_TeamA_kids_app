<template>
  <main>
    <div class="container contents">
      <div class="img-wrapper">
        <img
          src="@/assets/image/robot.png"
          alt="KIDS_APPキャラクターの画像です"
        />
      </div>
      <div class="quiz-area">
        <h2 class="contents-category">
          <span>インターネットの仕組み</span>
        </h2>
        <div class="question-box">
          <h3 class="question-number">第1問</h3>
          <span class="question-text">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト？
          </span>
        </div>
        <div class="answer-box">
          <p class="answer-text">アンサー1</p>
        </div>
        <div class="answer-box">
          <p class="answer-text">アンサー2</p>
        </div>
      </div>
      <div class="img-wrapper">
        <img
          src="@/assets/image/clock.png"
          alt="KIDS_APPキャラクターの画像です"
        />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.contents {
  display: flex;
  width: 100%;
  height: 500px;
  margin-top: 52px;
  & .img-wrapper {
    display: flex;
    align-items: center;
    width: 25%;
    padding: 0px 12px;
  }
  img {
    width: 100%;
  }
  & .quiz-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 12px;
  }
  .question-box {
  margin: 24px 0px;
  padding: 24px 24px;
  text-align: center;
  background-color: #fff;
  }
  .answer-box {
    margin-bottom: 18px;
    background-color: #fff;
    text-align: center;
  }
}
// テキスト装飾指定
.contents-category {
  position: relative;
  box-sizing: border-box;
  height: 60px;
  //角になってる部分の幅だけ要素の幅を狭める
  width: calc(100% - 30px - 30px);
  //角になってる部分の幅だけ要素を右にずらす
  margin: 0px 30px;
  padding: 12px;
  background-color: #ffb400;
  text-align: center;
  font-weight: bold;
  color: #fff;
}
h2:before {
  position: absolute;
  top: 0;
  left: -30px;
  content: "";
  border-width: 30px 30px 30px 0;
  border-style: solid;
  border-color: transparent #ffb400 transparent transparent;
}
h2:after {
  position: absolute;
  top: 0;
  right: -30px;
  content: "";
  border-width: 30px 0 30px 30px;
  border-style: solid;
  border-color: transparent #ffb400 transparent #ffb400;
}
.question-number {
  margin-bottom: 24px;
  font-weight: bold;
  color: #0068b7;
}
.question-text {
  font-size: 1.5em;
  font-weight: bold;
  color: #04294f;
}
.answer-text {
  margin: auto;
  padding: 6px;
  font-size: 1.5em;
  font-weight: bold;
  color: #04294f;
}
</style>