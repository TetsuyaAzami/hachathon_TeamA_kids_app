<template>
  <main>
    <div class="container">
      <div class="user-infomation">
        <div class="user-profile">
          <img
            src="@/assets/image/account.png"
            alt="ユーザープロフィールの画像です"
            width="48px"
          />
          <span>ニックネーム</span>
        </div>
        <div class="user-point">
          <img
            src="@/assets/image/point.png"
            alt="ユーザープロフィールの画像です"
            width="32px"
          />
          <span>保有ポイント</span>
        </div>
      </div>
    </div>
    <section class="container main-contents">
      <h2 class="contents-category">
        <span>レベル1</span><span>&gt;&gt;</span
        ><span>インターネットの仕組み</span>
      </h2>
      <div class="cards">
        <article class="card">
          <div class="card-body">
            <h5 class="card-title">インターネット</h5>
          </div>
          <div class="img-wrapper">
            <img
              src="@/assets/image/q_1.png"
              class="card-img-bottom"
              alt="〇〇の画像です"
            />
          </div>
          <i class="fas fa-check-circle"></i>
        </article>
        <article class="card">
          <div class="card-body">
            <h5 class="card-title">リクエストとレスポンス</h5>
          </div>
          <div class="img-wrapper">
            <img
              src="@/assets/image/q_2.png"
              class="card-img-bottom"
              alt="〇〇の画像です"
            />
          </div>
          <i class="fas fa-check-circle"></i>
        </article>
        <article class="card">
          <div class="card-body">
            <h5 class="card-title">HTTP</h5>
          </div>
          <div class="img-wrapper">
            <img
              src="@/assets/image/q_3.png"
              class="card-img-bottom"
              alt="〇〇の画像です"
            />
          </div>
          <i class="fas fa-check-circle"></i>
        </article>
        <article class="card">
          <div class="card-body">
            <h5 class="card-title">URL</h5>
          </div>
          <div class="img-wrapper">
            <img
              src="@/assets/image/q_4.png"
              class="card-img-bottom"
              alt="〇〇の画像です"
            />
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
<style lang="scss" scoped>
body div.container:first-of-type {
  margin-top: 52px;
}
.user-infomation {
  display: flex;
  height: 80px;
  background-color: #fff;
  color: #0d6efd;
  font-weight: bold;
  justify-content: space-around;
  & .user-profile {
    img {
      margin-right: 8px;
    }
    & span {
      line-height: 5;
    }
  }
  & .user-point {
    img {
      margin-right: 8px;
    }
    span {
      line-height: 5;
    }
  }
}

.main-contents {
  margin-top: 24px;
}
.contents-category {
  position: relative;
  box-sizing: border-box;
  height: 60px;
  //角になってる部分の幅だけ要素の幅を狭める
  width: calc(100% - 30px - 30px);
  //角になってる部分の幅だけ要素を右にずらす
  margin-left: 30px;
  padding: 12px;
  background-color: rgb(221, 69, 27);
  text-align: center;
  font-weight: bold;
  color: #fff;
  & span {
    margin-right: 24px;
  }
}

h2:before {
  position: absolute;
  top: 0;
  left: -30px;
  content: "";
  border-width: 30px 30px 30px 0;
  border-style: solid;
  border-color: transparent rgb(221, 69, 27) transparent transparent;
}
h2:after {
  position: absolute;
  top: 0;
  right: -30px;
  content: "";
  border-width: 30px 0 30px 30px;
  border-style: solid;
  border-color: transparent rgb(221, 69, 27) transparent rgb(221, 69, 27);
}

.cards {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.card {
  position: relative;
  & .card-body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: orange;
    & .card-title {
      display: block;
      margin: 0;
      font-weight: bold;
      color: #fff;
    }
  }

  & .img-wrapper {
    & img {
      display: block;
      width: 100%; /*任意の横幅を指定*/
      object-fit: contain;
    }
    display: flex;
    align-items: center;
    background: #fff;
  }
  & .fa-check-circle {
    position: absolute;
    font-size: 5rem;
    color: green;
    left: 100%;
    top: 100%;
    transform: translate(-60%, -60%);
    z-index: 1;
    background-color: #fff;
    border-radius: 40px;
  }
}
</style>
