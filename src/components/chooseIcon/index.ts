/*
 * @Author: xujian
 * @Date: 2022-03-31 23:08:11
 * @LastEditors: xujian
 * @LastEditTime: 2022-03-31 23:08:13
 * @Description:
 * @FilePath: /m-element-components/src/components/chooseIcon/index.ts
 */
import { App } from 'vue'
import chooseIcon from './src/index.vue'

// 让这个组件可以通过use的形式使用
export default {
    install(app: App) {
        app.component('m-choose-icon', chooseIcon)
    }
}
