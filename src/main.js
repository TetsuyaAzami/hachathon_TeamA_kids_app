import { createApp } from "vue";
//Bootstrap適用
import "bootstrap/dist/css/bootstrap.css"; // add
import "bootstrap-vue/dist/bootstrap-vue.css"; // add
//FontAwesome
// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//ルートコンポーネントのimport
import App from "./App.vue";
var app = createApp(App);

app.component("fa", FontAwesomeIcon);
app.mount("#app");
