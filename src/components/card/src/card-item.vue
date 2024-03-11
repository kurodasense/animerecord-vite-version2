<template>
  <el-card class="box-card">
    <div class="card-header">
      <date-item></date-item>
      <operation-item></operation-item>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import DateItem from "./date-item.vue";
import OperationItem from "./operation-item.vue";
import ContentItem from "./content-item.vue";
</script>

<style lang="less" scoped>
.box-card {
  width: 400px;
  height: 400px;
  margin: 10px 20px;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
