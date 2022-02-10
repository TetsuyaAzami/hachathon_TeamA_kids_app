<template>
  <!-- main -->
  <main>
    <div class="container container-main">
      <h2 class="page-title">ようこそKIDS APP TITLEへ</h2>
      <div class="contents container">
        <div class="image-wrapper">
          <img src="@/assets/image/login.png" alt="account" />
        </div>
        <div class="login-form-area">
          <from action="#" method="post">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="ニックネームを入れてください"
              class="form-control"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="メールアドレスを入れてください"
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
              アカウントを作る
            </button>
          </from>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "create-acount",
};
</script>
<style scoped lang="scss">
.container-main {
  margin: auto;
}
.page-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  color: #fff;
  background-color: orange;
}

.contents {
  display: flex;
  height: 500px;
  width: 100%;
  & .image-wrapper {
    display: flex;
    align-items: center;
  }
  img {
    width: 100%;
  }
  & .login-form-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    input {
      margin-bottom: 8px;
    }
    button {
      margin: 0 auto;
    }
    width: 70%;
  }
}
</style>
