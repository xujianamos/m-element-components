<!--
 * @Author: xujian
 * @Date: 2022-03-27 12:27:09
 * @LastEditors: xujian
 * @LastEditTime: 2022-03-28 00:49:40
 * @Description: 
 * @FilePath: /m-element-components/src/layout/components/Sidebar/index.vue
-->
<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    <el-menu-item index="2">
      <el-icon-menu></el-icon-menu>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-document></el-icon-document>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon-setting></el-icon-setting>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import {} from "vue";
</script>
<style lang="scss" scoped></style>
