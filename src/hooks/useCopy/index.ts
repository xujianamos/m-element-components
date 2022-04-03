/*
 * @Author: xujian
 * @Date: 2022-04-03 15:09:38
 * @LastEditors: xujian
 * @LastEditTime: 2022-04-03 15:13:01
 * @Description:
 * @FilePath: /m-element-components/src/hooks/useCopy/index.ts
 */
import { ElMessage } from "element-plus";
/**
 * @description: 复制文本
 * @param {string} text
 * @return {*}
 */
export const useCopy = (text: string) => {
  // 创建输入框
  let input = document.createElement("input");
  // 给输入框value赋值
  input.value = text;
  // 追加到body里面去
  document.body.appendChild(input);
  // 选择输入框的操作
  input.select();
  // 执行复制操作
  document.execCommand("Copy");
  // 删除加入的输入框
  document.body.removeChild(input);
  // 提示用户
  ElMessage.success("复制成功");
};
