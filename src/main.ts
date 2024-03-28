import { createApp } from 'vue';
import './style.css';
import 'primeicons/primeicons.css';
import App from './App.vue';
import Router from "./routes/index";
import VueApexCharts from "vue3-apexcharts";
import { makeServer } from "./server/index"
import { createPinia } from 'pinia'

const app = createApp(App);
const pinia = createPinia();

if (process.env.NODE_ENV === "development") {
  makeServer()
}

app.use(Router).use(VueApexCharts).use(pinia);
app.mount("#app");
