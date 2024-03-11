<template>
  <div class="operation-item">
    <el-popover placement="top" trigger="click">
      <template #reference>
        <el-button class="button" type="danger" text>删除记录表</el-button>
      </template>
      <el-text tag="p" type="danger">确认删除?</el-text>
      <div style="margin-top: 10px; text-align: right">
        <el-button size="small" type="primary" @click="delRecord">确认</el-button>
      </div>
    </el-popover>
    <el-button class="button" text @click="addRecord">添加追番</el-button>
  </div>
</template>

<script lang="ts" setup>
const delRecord = () => {};

const addRecord = () => {};
</script>

<style scoped lang="less">
.operation-item {
  text-align: right;
}
</style>
