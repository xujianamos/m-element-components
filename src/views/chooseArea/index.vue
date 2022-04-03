<!--
 * @Author: xujian
 * @Date: 2022-03-25 23:19:07
 * @LastEditors: xujian
 * @LastEditTime: 2022-04-03 15:42:28
 * @Description:
 * @FilePath: /m-element-components/src/views/chooseArea/index.vue
-->
<template>
  <m-choose-area @change="changeArea"></m-choose-area>
</template>

<script lang="ts" setup>
let changeArea = (val: any) => {
  console.log(val);
};
</script>

<style lang="scss" scoped></style>
