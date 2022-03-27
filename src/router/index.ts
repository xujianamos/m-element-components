/*
 * @Author: xujian
 * @Date: 2022-03-25 23:12:41
 * @LastEditors: xujian
 * @LastEditTime: 2022-03-27 11:15:28
 * @Description:路由配置
 * @FilePath: /m-element-components/src/router/index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "views/Home.vue";
import Layout from "@/layout/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        component: Home,
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
