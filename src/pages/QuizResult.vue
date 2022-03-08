<template>
  <main>
    <div class="container contents">
      <h2 class="contents-category">
          <span>インターネットの仕組み</span>
      </h2>
      <div class="result-area">
        <!-- キャラクター画像 -->
        <div class="img-wrapper">
          <img
            src="@/assets/image/get_point.png"
            alt="KIDS_APPキャラクターの画像です"
          />
        </div>
        <!-- クイズ結果 -->
        <div class="result-box">
          <div class="quiz-now">
            <div class="correct-answer">
              <span>3問正解</span>
            </div>
            <div class="get-point">
              <span>30ポイント</span>
            </div>
          </div>
          <div class="total-point">
            <span>合計80ポイント</span>
          </div>
        </div>
      </div>
      <button type="butoon" class="btn">
        ホームに戻る
      </button>
    </div>
  </main>
</template>

<style scoped lang="scss">
.contents {
  display: flex;
  flex-direction: column;
  min-height: 400px;
  width: 100%;
  margin-top: 52px;
  & .img-wrapper {
    display: flex;
    align-items: center;
    width: 35%;
    padding: 0px 12px;
  }
  img {
    width: 100%;
  }
  & .result-area {
    flex: 1;
    display: flex;
    justify-content: center;
    margin: 24px auto;
  }
  .result-box {
    margin: 24px 0px;
    padding: 24px 24px;
    width: 60%;
    text-align: center;
    background-color: #fff;
    &.quiz-now {
      display: flex;
      flex-direction: row;
    }
  }
  .btn {
    margin: 24px auto;
    font-size: 1.5rem;
    background-color: #0688d2;
  }
  .btn:hover {
    color: #fff;
    background-color: #0068b7;
  }
}
// テキスト装飾指定
.contents-category {
  position: relative;
  left: 20%;
  box-sizing: border-box;
  height: 60px;
  //角になってる部分の幅だけ要素の幅を狭める
  width: calc(60% - 30px - 30px);
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
</style>