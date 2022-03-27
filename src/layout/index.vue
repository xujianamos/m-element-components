<!--
 * @Author: xujian
 * @Date: 2021-12-15 10:29:11
 * @LastEditors: xujian
 * @LastEditTime: 2022-03-27 12:29:23
 * @Description: Layout布局页面
 * @FilePath: /m-element-components/src/layout/index.vue
-->
<template>
  <el-container>
    <el-aside width="auto">
      <Sidebar></Sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <span @click="handleToggleCollapse">
          <el-icon-expand
            v-if="isCollapse"
            style="margin-right: 10px"
          ></el-icon-expand>
          <el-icon-fold v-else></el-icon-fold>
        </span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "./components/Sidebar";
const isCollapse = ref(false);
const handleToggleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
</script>
<style lang="scss" scoped>
.el-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.el-header,
.el-main,
.el-aside {
  border: 1px solid red;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
