<template>
  <HeaderVue></HeaderVue>
  <!-- <TopPageVue></TopPageVue> -->
  <!-- <CreateAccountVue></CreateAccountVue> -->
  <HomeVue></HomeVue>
  <!-- <QuizVue></QuizVue> -->
  <FooterVue></FooterVue>
</template>

<script>
import HeaderVue from "./components/Header.vue";
// import TopPageVue from "./pages/TopPage.vue";
// import CreateAccountVue from "./pages/CreateAccount.vue";
import HomeVue from "./pages/Home.vue";
// import QuizVue from "./pages/Quiz.vue";
import FooterVue from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    HeaderVue,
    // TopPageVue,
    // CreateAccountVue,
    HomeVue,
    // QuizVue,
    FooterVue,
  },
};
</script>
<style lang="scss">
//共通
* {
  margin: 0;
  padding: 0;
}
html {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
ul {
  list-style: none;
}
.container {
  //コンテナ共通で使います
  padding: 12px;
}

.btn {
  display: block;
  font-weight: bold;
  color: #00ccff;
}

body {
  min-height: 100vh;
  background-color: rgb(165, 230, 234);
}
</style>
