<template>
  <el-menu-item :index="index" class="el-menu-item">
    <slot name="icon"
      ><el-icon><HomeFilled /></el-icon
    ></slot>
    <template #title>{{ title }}</template>
  </el-menu-item>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    index: string;
    title: string;
    routerPath: string;
  }>(),
  {}
);
</script>
