<template>
  <!-- main -->
  <main>
    <div class="container container-main">
      <div class="container-title-logo">
        <img src="@/assets/image/title_logo2.png" />
      </div>
      <div class="contents container">
        <div class="image-wrapper">
          <img src="@/assets/image/login.png" alt="account" />
        </div>
        <div class="login-form-area">
          <h3>新しいアカウントを作る</h3>
          <form>
            <input
              type="username"
              id="username"
              name="username"
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
            <button type="submit" class="sign-up-button" @click="signup">
              アカウントを登録
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "create-acount",
  data() {
    return {}
  },
    methods: {
    signup() {
      const $name = document.getElementById("username");
      let nameVal = $name.value;
      const $email = document.getElementById("email");
      let emailVal = $email.value;
      const $password = document.getElementById("password");
      let passwordVal = $password.value;
      console.log(nameVal);
      console.log(emailVal);
      console.log(passwordVal);
      this.axios
        .post("http://localhost:3000/signup", {
          "username": nameVal,
          "email": emailVal,
          "password": passwordVal
        }, 
        {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then((res) => {
          console.log("OK");
          console.log(res);
        },)
        .catch((err) => {
          console.log("エラー発生");
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.container-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  & .container-title-logo {
    display: flex;
    justify-content: center;
    padding-top: 10px;
  }
  img {
    max-width: 100%;
  }
}
.contents {
  display: flex;
  justify-content: center;
  padding: 0px 24px;
  min-height: 400px;
  width: 100%;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  & .image-wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    @media only screen and (max-width: 767px) {
      order: 1;
      margin: -30px 0px;
    }
  }
  img {
    width: 80%;
    @media only screen and (max-width: 991px) {
      width: 100%;
    }
  }
  & .login-form-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #fff;
    border-radius: 6px;
    padding: 20px;
    max-width: 600px;
    margin: auto;
    box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
    @media only screen and (max-width: 767px) {
      width: 100%;
      margin: 20px 0px;
    }

    input {
      background: #f5f5f5;
      border: 0;
      padding: 12px;
      border-radius: 6px;
      margin: 15px 0px;
      border: 1px solid #eee;
    }

    h3 {
      text-align: center;
      font-size: 1.4rem;
      font-weight: bold;
      color: #ccc;
      margin: 12px 0px;
    }

    .sign-up-button {
      position: relative;
      width: 100%;
      margin-top: 8px;
      padding: 8px;
      border-radius: 6px;
      border: 0;
      background: #f55b23;
      font-size: 1.2rem;
      font-weight: bold;
      color: #fff;
      text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 3px 0px #c17c4e;
    }

    button {
      margin: 0 auto;
    }
    width: 70%;
  }
}
</style>
