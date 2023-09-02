import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Router from "./routes/index";
import 'primeicons/primeicons.css';
import { makeServer } from "./server/index"

const app = createApp(App);

if (process.env.NODE_ENV === "development") {
  makeServer()
}

app.use(Router);
app.mount("#app");
