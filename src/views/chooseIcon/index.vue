<!--
 * @Author: xujian
 * @Date: 2022-03-25 23:19:07
 * @LastEditors: xujian
 * @LastEditTime: 2022-04-03 13:05:29
 * @Description:选择图标使用
 * @FilePath: /m-element-components/src/views/chooseIcon/index.vue
-->
<template>
  <div class="">
    <m-choose-icon title="选择图标" v-model:visible="visible"
      >选择图标</m-choose-icon
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let visible = ref<boolean>(false);
</script>
<style lang="scss" scoped></style>
