<template>
  <div class="date-item">
    <span v-if="isUpdateDateName">
      <el-input @blur="hideUpdateDateName" @change="updateDateName"></el-input>
    </span>
    <span v-else @dblclick="dblClick">{{ date.date_name }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    date: any;
  }>(),
  {
    date: () => ({})
  }
);

const isUpdateDateName = ref(false);

const hideUpdateDateName = () => {};

const updateDateName = () => {};

const dblClick = () => {};
</script>
