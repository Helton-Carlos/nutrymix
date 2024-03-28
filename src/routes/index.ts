import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("../pages/Dashboard.vue"),
    meta: {
      title: "Dashboard",
      subTitle: "Bem-vindo ao Nutrymix",
    }
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../pages/User.vue"),
    meta: {
      title: "Cadastro de pacientes",
      subTitle: "Controle de clientes e usuário",
    },
  },
  {
    path: "/file",
    name: "file",
    component: () => import("../pages/File.vue"),
    meta: {
      title: "Arquivos",
      subTitle: "Você possue esses arquivos",
    },
  },
  {
    path: "/file/:list",
    name: "file-list",
    component: () => import("../pages/FileList.vue"), 
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("../pages/Calendar.vue"),
    meta: {
      title: "Agendamento",
      subTitle: "Veja seu agendamento",
    }
  },
  {
    path: "/historic",
    name: "historic",
    component: () => import("../pages/Historic.vue"),
    meta: {
      title: "Histórico",
      subTitle: "Faça seus filtros de histórico.",
    }
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../pages/Contact.vue"),
    meta: {
      title: "Contato",
      subTitle: "Veja seus contatos.",
    }
  },
  {
    path: "/config",
    name: "config",
    component: () => import("../pages/Config.vue"),
    meta: {
      title: "Configuração",
      subTitle: "Deixe seu perfil ao seu estilo.",
    }
  },
  {
    path: "/register-patient",
    name: "registerPatient",
    component: () => import("../pages/RegisterPatient.vue"),
    meta: {
      title: "Registre o paciente",
      subTitle: "Grave os dados do seu paciente.",
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeResolve(async (to, from, next) => {
  let getLocal = localStorage.getItem('user-store');
  
  if (!getLocal && to.path === '/' && from.path) {
    next('/login');
  } else {
    next();
  }
});

export default router;