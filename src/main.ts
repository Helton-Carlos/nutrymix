import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Router from "./routes/index";
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(Router);
app.mount("#app");
