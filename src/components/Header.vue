<template>
  <!-- header navigation -->
  <header>
    <nav class="navbar navbar-dark header-nav-color">
      <div class="container-fluid">
        <router-link :to="{ name: 'courses' }">
          <span class="navbar-brand mb-0 h1">てっくらんど</span>
        </router-link>
        <ul class="header-nav-list">
          <router-link :to="{ name: 'courses' }">
            <li class="courses-button">
              <fa :icon="['fas', 'list']" />コース一覧
            </li>
          </router-link>
          <router-link :to="{ name: 'toSignUp' }">
            <li class="sign-up-button">
              <fa :icon="['fas', 'user-check']" />会員登録
            </li>
          </router-link>
          <router-link :to="{ name: 'topPage' }">
            <li class="sign-in-button">
              <fa :icon="['fas', 'right-to-bracket']" />ログイン
            </li>
          </router-link>
          <span href="/signout" @click="signout">
            <li class="signout-button">
              <fa :icon="['fas', 'right-to-bracket']" />ログアウト
            </li>
          </span>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      path: null,
    };
  },
  mounted() {
    this.path = this.$route.path;
  },
  methods: {
    signout() {
      this.axios
        .post("/signout", {
          withCredentials: true,
        })
        .then((res) => {
          if (res.status == 200) {
            this.$router.push("/");
          }
        })
        .catch((err) => {
          console.log("エラー発生");
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="scss">
//header
.container-fluid {
  padding: 0 24px;
  height: 50px;
}
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  @media only screen and (max-width: 428px) {
    font-size: 1.2rem;
  }
}
.header-nav-color {
  background-color: #0688d2;
}
.header-user-profile {
  img {
    margin-right: 8px;
  }
  color: #fff;
  font-weight: bold;
}
.header-nav-list {
  margin-bottom: 0;
  display: flex;
  font-weight: bolder;
  .courses-button,
  .sign-up-button,
  .sign-in-button,
  .signout-button {
    color: #fff;
  }
  svg {
    margin-right: 8px;
    line-height: 40px;
  }
  li {
    line-height: 40px;
    margin-left: 24px;
    @media only screen and (max-width: 428px) {
      margin-left: 12px;
    }
  }
}
</style>
