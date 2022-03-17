import { createApp } from "vue";
//Bootstrap適用
import "bootstrap/dist/css/bootstrap.css"; // add
import "bootstrap-vue/dist/bootstrap-vue.css"; // add
//FontAwesome
// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";

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
app.use(VueAxios, axiosInstance);
app.use(router);
app.component("fa", FontAwesomeIcon);
app.mount("#app");
