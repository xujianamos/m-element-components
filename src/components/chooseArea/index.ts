/*
 * @Author: xujian
 * @Date: 2022-04-03 15:38:42
 * @LastEditors: xujian
 * @LastEditTime: 2022-04-03 15:38:42
 * @Description:
 * @FilePath: /m-element-components/src/components/chooseArea/index.ts
 */
import { App } from "vue";
import chooseArea from "./src/index.vue";

// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component("m-choose-area", chooseArea);
  },
};
