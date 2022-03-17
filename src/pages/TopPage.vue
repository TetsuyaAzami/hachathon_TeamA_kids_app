<template>
  <main>
    <div class="container">
      <div class="container-title-logo">
        <img src="@/assets/image/title_logo2.png" />
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
          <ul v-if="errors.length">
            <li v-for="error in errors" :key="error" class="text-center errors">
              {{ error }}
            </li>
          </ul>
          <form>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="メールアドレス"
              class="form-control"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="パスワード"
              class="form-control"
            />
            <button type="button" class="sign-in-button" @click="signin">
              ログイン
            </button>
          </form>
          <router-link :to="{ name: 'toSignUp' }">
            <button type="button" class="sign-up-button">
              新しいアカウント
            </button>
          </router-link>
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
<script>
export default {
  data() {
    return {
      errors: [],
      emailVal: "",
      passwordVal: "",
    };
  },
  methods: {
    signin() {
      const $email = document.getElementById("email");
      this.emailVal = $email.value;
      const $password = document.getElementById("password");
      this.passwordVal = $password.value;
      //バリデーションチェック
      this.checkForm();
      if (this.errors.length > 0) {
        return;
      }
      this.axios
        .post(
          "/signin",
          {
            email: this.emailVal,
            password: this.passwordVal,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.$router.push("/courses");
          }
        })
        .catch(() => {
          this.errors.push("メールアドレスかパスワードが間違っています");
        });
    },

    //フォームバリデーションチェック
    checkForm() {
      this.errors = [];
      if (!this.emailVal) {
        this.errors.push("メールアドレスを入力してください");
      }
      if (!this.emailIsValid(this.emailVal)) {
        this.errors.push("メールアドレスの形式で入力してください");
      }
      if (!this.passwordVal) {
        this.errors.push("パスワードを入力してください");
      }
      if (this.passwordVal.length < 8) {
        this.errors.push("パスワードは8文字以上にしてください");
      }
    },

    // メールアドレス形式チェック
    emailIsValid(email) {
      let emailRegexp =
        /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/i;
      return emailRegexp.test(email);
    },
  },
};
</script>

<style scoped lang="scss">
//main
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
    background: #fff;
    border-radius: 6px;
    padding: 20px;
    width: 300px;
    margin: auto;
    box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.1);
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
      text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
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
      text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 3px 0px #c17c4e;
    }

    button {
      margin: 0 auto;
    }
  }
}
</style>
