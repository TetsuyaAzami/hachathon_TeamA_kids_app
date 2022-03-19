<template>
  <main>
    <div class="container contents">
      <!-- コースタイトル -->
      <h2 class="contents-category">
        <span>インターネットの仕組み</span>
      </h2>
      <h1>{{ count }}</h1>
      <div class="result-area">
        <!-- キャラクター画像 -->
        <div class="img-wrapper">
          <img
            src="@/assets/image/get_point.png"
            alt="KIDS_APPキャラクターの画像です"
          />
        </div>
        <!-- クイズ結果 -->
        <!-- 正解数 -->
        <div class="result-box">
          <div class="title bg-orange">
            <h6>正解数</h6>
          </div>
          <div class="correct-answer">
            <h3>{{ correctCount }} 問</h3>
          </div>
        </div>
        <!-- 獲得ポイント -->
        <div class="result-box">
          <div class="title bg-blue">
            <h6>獲得ポイント</h6>
          </div>
          <div class="get-point">
            <h3>{{ point }} P</h3>
          </div>
        </div>
        <!-- 合計ポイント -->
        <div class="result-box">
          <div class="title bg-red">
            <h6>合計ポイント</h6>
          </div>
          <div class="total-point">
            <h3>50 P</h3>
          </div>
        </div>
      </div>
      <router-link :to="{ name: 'courses' }">
        <button type="button" class="btn">コース一覧に戻る</button>
      </router-link>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      point: localStorage.getItem("point"),
      correctCount: localStorage.getItem("correctCount"),
    };
  },
};
</script>

<style scoped lang="scss">
.contents {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 52px;
  & .img-wrapper {
    display: flex;
    align-items: center;
    width: 30%;
    padding: 0px 12px;
    @media only screen and (max-width: 991px) {
      order: 1;
      margin-top: 24px;
      width: 40%;
    }
    @media only screen and (max-width: 991px) {
      margin-top: 12px;
      width: 50%;
    }
  }
  img {
    width: 100%;
  }
  & .result-area {
    flex: 1;
    display: flex;
    justify-content: center;
    margin: 24px auto;
    @media only screen and (max-width: 991px) {
      flex-wrap: wrap;
      margin-top: 36px;
      margin-bottom: 0px;
    }
    @media only screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      margin-top: 24px;
    }
  }
  .result-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 12px;
    width: 180px;
    height: 180px;
    background-color: #fff;
    @media only screen and (max-width: 767px) {
      margin: 12px;
      width: 60%;
    }

    & .title {
      text-align: center;
      padding: 12px;
      width: 100%;

      &.bg-orange {
        background-color: #ffb400;
      }
      &.bg-blue {
        background-color: #0068b7;
      }
      &.bg-red {
        background-color: #f55b23;
      }
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
  @media only screen and (max-width: 767px) {
    left: 0%;
    width: calc(100% - 30px - 30px);
  }
}
span {
  @media only screen and (max-width: 767px) {
    margin: auto;
    font-size: 1.5rem;
  }
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
h3 {
  margin: auto;
  padding: 24px 12px;
  font-size: 2.8rem;
  font-weight: bold;
}
h6 {
  margin: auto;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
}
.correct-answer {
  padding: 12px 24px;
  color: #ffb400;
}
.get-point {
  padding: 12px 24px;
  color: #0068b7;
}
.total-point {
  padding: 12px 24px;
  color: #f55b23;
}
</style>
