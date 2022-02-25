<template>
  <main>
    <!-- <div class="container container-with-border"> -->
    <div class="container">
      <!-- <h1 class="page_title">KIDS APP TITLE</h1> -->
      <div class="container-title-logo">
        <img
          src="@/assets/image/title_logo2.png"
        />
      </div>
      <div class="contents container">
        <div class="img-wrapper">
          <img
            src="@/assets/image/top_1.png"
            alt="KIDS_APPキャラクターの画像です"
          />
        </div>
        <div class="login-form-area">
          <h2>ゲームをはじめよう</h2>
          <form action="#" method="post">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="ユーザ名"
              class="form-control"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="パスワード"
              class="form-control"
            />
            <!-- <button type="submit" class="btn btn-light sign-in-button"> -->
            <button type="submit" class="sign-in-button">
              ログイン
            </button>
          </form>
          <!-- <button type="button" class="btn btn-light sign-up-button"> -->
          <button type="button" class="sign-up-button">
            新しいアカウント
          </button>
        </div>
        <div class="img-wrapper">
          <img
            src="@/assets/image/top_2.png"
            alt="KIDS_APPキャラクターの画像です"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
//main
// main .container-with-border {
//   margin: 12px auto;
//   border: 4px solid #fff;
//   border-radius: 15px;
// }
// .page_title {
//   font-size: 4.5rem;
//   font-weight: bold;
//   text-align: center;
//   padding-top: 32px;
//   color: orange;
// }
.container-title-logo {
  display: flex;
  justify-content: center;
  padding: 10px;
  img {
    max-width: 100%;
  }
}
.contents {
  display: flex;
  min-height: 400px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    flex-wrap: wrap;
  }
  & .img-wrapper {
    padding: 10px;
    display: flex;
    align-items: center;
    width: 35%;
    @media only screen and (max-width: 991px) {
      flex: 1 0 50%;
      order: 1;
      margin: auto;
    }
  }
  img {
    width: 100%;
  }
  & .login-form-area {
    flex: 1 1 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:#fff;
    border-radius: 6px;
    padding: 20px;
    // padding-top:30px;
    width: 300px;
    margin: auto;
    box-shadow: 15px 15px 0px rgba(0,0,0,.1);
    @media only screen and (max-width: 991px) {
      flex: 1 1 55%;
      margin: 0px 10px 20px 20px;
    }


    h2 {
      text-align: center;
      font-size: 1.4rem;
      font-weight: bold;
      color: #ccc;
      margin: 12px 0px;
    }
    input {
      // margin-bottom: 8px;
      background: #f5f5f5;
      border: 0;
      padding: 12px;
      border-radius: 6px;
      margin: 15px 0px;
      border: 1px solid #eee;
    }
    .sign-in-button {
      position: relative;
      width: 100%;
      padding: 8px;
      margin-bottom: 24px;
      border-radius: 6px;
      border: 0;
      background: #ffbb00;
      font-size: 1.2rem;
      font-weight: bold;
      color: #fff;
      text-shadow: 1px 1px 0px rgba(0,0,0,.1);
      box-shadow: 0px 3px 0px #c17c4e;
    }
    .sign-up-button {
      position: relative;
      width: 100%;
      padding: 8px;
      border-radius: 6px;
      border: 0;
      background: #f55b23;
      font-size: 1.2rem;
      font-weight: bold;
      color: #fff;
      text-shadow: 1px 1px 0px rgba(0,0,0,.1);
      box-shadow: 0px 3px 0px #c17c4e;
    }
    
    button {
      margin: 0 auto;
      // &.sign-in-button {
      //   margin-top: 16px;
      //   margin-bottom: 48px;
      // }
    }
  }
}
</style>
