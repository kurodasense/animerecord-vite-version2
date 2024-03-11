<template>
  <el-aside width="200px" class="left-nav">
    <el-menu>
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>归档</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><icon-menu /></el-icon>
        <template #title>添加追番日期</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import NavContent from "./nav-content.vue";
import NavButton from "./nav-button.vue";
</script>

<style scoped lang="less"></style>
