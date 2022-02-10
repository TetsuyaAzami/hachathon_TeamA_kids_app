<template>
  <main>
    <div class="container container-with-border">
      <h1 class="page_title">KIDS APP TITLE</h1>
      <div class="contents container">
        <div class="img-wrapper">
          <img
            src="@/assets/image/top_1.png"
            alt="KIDS_APPキャラクターの画像です"
          />
        </div>
        <div class="login-form-area">
          <form action="#" method="post">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="ユーザ名を入れてください"
              class="form-control"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="パスワードを入れてください"
              class="form-control"
            />
            <button type="submit" class="btn btn-light sign-in-button">
              ログイン
            </button>
          </form>
          <button type="button" class="btn btn-light sign-up-button">
            アカウントを作る
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
main .container-with-border {
  margin: 48px auto;
  border: 4px solid #fff;
  border-radius: 15px;
}
.page_title {
  font-size: 4.5rem;
  font-weight: bold;
  text-align: center;
  padding-top: 32px;
  color: orange;
}

.contents {
  display: flex;
  height: 500px;
  width: 100%;
  & .img-wrapper {
    display: flex;
    align-items: center;
    width: 35%;
  }
  img {
    width: 100%;
  }
  & .login-form-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    input {
      margin-bottom: 8px;
    }
    button {
      margin: 0 auto;

      &.sign-in-button {
        margin-top: 16px;
        margin-bottom: 48px;
      }
    }
  }
}
</style>
