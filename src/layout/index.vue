<!--
 * @Author: xujian
 * @Date: 2021-12-15 10:29:11
 * @LastEditors: xujian
 * @LastEditTime: 2022-03-31 23:03:33
 * @Description: Layout布局页面
 * @FilePath: /m-element-components/src/layout/index.vue
-->
<template>
  <el-container>
    <el-aside width="auto">
      <sidebar :collapse="collapse"></sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <nav-bar v-model:collapse="collapse"></nav-bar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Sidebar from "./components/Sidebar/index.vue";
import NavBar from "./components/Navbar.vue";
const collapse = ref(false);
</script>
<style lang="scss" scoped>
.el-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.el-main,
.el-aside {
  /* border: 1px solid red; */
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>
