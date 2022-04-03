<!--
 * @Author: xujian
 * @Date: 2021-12-15 20:11:53
 * @LastEditors: xujian
 * @LastEditTime: 2022-03-31 23:04:51
 * @Description: 导航栏
 * @FilePath: /m-element-components/src/layout/components/Navbar.vue
-->
<template>
  <div class="header">
    <span @click="handleToggleCollapse">
      <el-icon-expand v-if="collapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  collapse: {
    type: Boolean,
  },
});
const emits = defineEmits(["update:collapse"]);
const handleToggleCollapse = () => {
  // 修改父组件的值
  emits("update:collapse", !props.collapse);
};
</script>
<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  /* align-content: center; */
  span {
    cursor: pointer;
  }
}
</style>
