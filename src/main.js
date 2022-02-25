import { createApp } from "vue";
//Bootstrap適用
import "bootstrap/dist/css/bootstrap.css"; // add
import "bootstrap-vue/dist/bootstrap-vue.css"; // add
//FontAwesome
// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
import VueAxios from "vue-axios";
//ルートコンポーネントのimport
import App from "./App.vue";

//mock service workerの設定
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const app = createApp(App);
app.use(VueAxios, axios);
app.component("fa", FontAwesomeIcon);
app.mount("#app");
