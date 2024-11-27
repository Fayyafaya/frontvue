import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
// import store from "@/store";

Vue.use(VueRouter);

// const ifNotAuthenticated = (to, from, next) => {
//   if (!store.state.isLoggedIn) {
//     next();
//     return;
//   }
//   next("/");
// };

// const checkAdmin = (to, from, next) => {
//   if (store.state.isLoggedIn) {
//     if (store.state.userData.role === "admin") {
//       next();
//       return;
//     } else {
//       next("/");
//     }
//   }
//   next("/sign-in");
// };

// const ifAuthenticated = (to, from, next) => {
//   if (store.state.isLoggedIn) {
//     next();
//     return;
//   }
//   next("/sign-in");
// };

const routes = [
  {
    path: "",
    component: () => import("../views/ToolBarView.vue"),
    children: [
      {  //กด submit ไม่ได้
        path: "/sign-in",
        name: "signIn",
        component: () => import("../views/SignInView.vue"),
        // beforeEnter: ifNotAuthenticated,
      },
      { //กด submit ไม่ได้
        path: "/sign-up",
        name: "signUp",
        component: () => import("../views/SignUpView.vue"),
        // beforeEnter: ifNotAuthenticated,
      },
      { //ยังไม่มีหน้า
        path: "/",
        name: "home",
        component: HomeView,
      },
      { //ยังไม่มีหน้า
        path: "/product/:id",
        name: "product_detail",
        component: () => import("../views/ProductView.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "/cart",
        name: "cart",
        component: () => import("../views/CartView.vue"),
      },
      { //ยังไม่มีหน้า
        path: "/order",
        name: "order",
        component: () => import("../views/OrderView.vue"),
      },
      { //ยังไม่มีหน้า
        path: "/manage",
        name: "manage",
        component: () => import("../views/ManageView.vue"),
        // beforeEnter: checkAdmin,
      },
    ],
  },
  {
    path: "/grade",
    name: "grade",
    component: () => import("../views/Grade.vue"),
  },
  {
    path: "/test",
    name: "testAPI",
    component: () => import("../views/TestAPI.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
