/*
 * @Author: xujian
 * @Date: 2022-03-25 22:37:21
 * @LastEditors: xujian
 * @LastEditTime: 2022-03-27 10:45:04
 * @Description:
 * @FilePath: /m-element-components/src/main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./styles/index.scss";
import * as Icons from "@element-plus/icons-vue";

import { toLine } from "./utils";

const app = createApp(App);
// 全局注册图标
for (let i in Icons) {
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
}

app.use(router).use(ElementPlus);
app.mount("#app");
