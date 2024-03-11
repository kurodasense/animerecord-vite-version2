<template>
  <div class="app">
    <el-container>
      <!-- 左侧导航栏 -->
      <nav-main></nav-main>
      <!-- 右侧主要内容展示 -->
      <el-main class="right-content">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavMain from "@/components/nav";
</script>

<style scoped lang="less">
.right-content {
  width: 100%;
}
</style>
