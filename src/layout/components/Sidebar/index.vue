<!--
 * @Author: xujian
 * @Date: 2022-03-27 12:27:09
 * @LastEditors: xujian
 * @LastEditTime: 2022-03-31 23:06:16
 * @Description: 左侧菜单栏
 * @FilePath: /m-element-components/src/layout/components/Sidebar/index.vue
-->
<template>
  <el-menu
      router
    default-active="/"
    class="el-menu-vertical-demo"
    :collapse="collapse"
  >
    <el-menu-item v-for="item in data" :index="item.index">
     <component :is="'el-icon-'+item.icon"></component>
      <span>{{item.name}}</span>
    </el-menu-item>


  </el-menu>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  collapse: {
    type: Boolean,
  },
});
let data = [
  {
    icon: 'homefilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'check',
    name: '图标选择器',
    index: '/chooseIcon'
  },
  {
    icon: 'location',
    name: '省市区选择',
    index: '/chooseArea'
  },
  {
    icon: 'sort',
    name: '趋势标记',
    index: '/trend'
  },
  {
    icon: 'timer',
    name: '时间选择',
    index: '/chooseTime'
  },
  {
    icon: 'bell',
    name: '通知菜单',
    index: '/notification'
  },
  {
    icon: 'menu',
    name: '导航菜单',
    index: '/menu'
  },
  {
    icon: 'turnoff',
    name: '城市选择',
    index: '/chooseCity'
  },
  {
    icon: 'darrowright',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'scaletooriginal',
    name: '日历',
    index: '/calendar'
  },
  {
    icon: 'setting',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'setting',
    name: '弹出框表单',
    index: '/modalForm'
  },
  {
    icon: 'shoppingbag',
    name: '表格',
    index: '/table'
  }
]
</script>
<style lang="scss" scoped>

</style>
