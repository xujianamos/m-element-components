/*
 * @Author: xujian
 * @Date: 2022-03-25 23:37:18
 * @LastEditors: xujian
 * @LastEditTime: 2022-03-25 23:48:08
 * @Description:
 * @FilePath: /m-element-components/src/utils/index.ts
 */
export const toLine = (value: string) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};
