import { createRouter, createWebHistory } from 'vue-router';
import { routes } from "../routes/index"

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

const route ={
  global: {
    plugins: [router]
  }
}

export default route;