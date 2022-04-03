/*
 * @Author: xujian
 * @Date: 2022-04-03 12:56:04
 * @LastEditors: xujian
 * @LastEditTime: 2022-04-03 15:39:59
 * @Description:注册组件
 * @FilePath: /m-element-components/src/components/index.ts
 */
import { App } from "vue";
import chooseIcon from "./chooseIcon";
import chooseArea from "./chooseArea";
const components = [chooseIcon, chooseArea];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
