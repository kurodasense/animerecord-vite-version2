<template>
  <el-aside width="200px" class="left-nav">
    <el-menu>
      <template v-for="item in nav_items" :key="item.index">
        <nav-item v-bind="item">
          <template #icon>
            <el-icon v-if="item.index == '1'"><HomeFilled /></el-icon>
            <el-icon v-else-if="item.index == '2'"><Management /></el-icon>
          </template>
        </nav-item>
      </template>
      <el-menu-item index="3">
        <el-icon><Ticket /></el-icon>
        <template #title>添加追番日期</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import NavItem from "./nav-item.vue";
import NavContent from "./nav-content.vue";
import NavButton from "./nav-button.vue";
import nav_items from "../config/item.config";
</script>

<style scoped lang="less"></style>
