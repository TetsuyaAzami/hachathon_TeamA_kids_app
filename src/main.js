import { createApp } from "vue";
//Bootstrap適用
import "bootstrap/dist/css/bootstrap.css"; // add
import "bootstrap-vue/dist/bootstrap-vue.css"; // add
//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";

library.add(faRightToBracket);
library.add(faUserCheck);
library.add(faList);

//axios
import axios from "axios";
import VueAxios from "vue-axios";
//vue-router
import router from "./router";
//components
import App from "./App.vue";

//axiosの共通インスタンス
let axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production" ? "http://localhost:3000/" : "",
});

//mock service workerの設定
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const app = createApp(App);
app.component("fa", FontAwesomeIcon);
app.use(VueAxios, axiosInstance);
app.use(router);
app.mount("#app");
