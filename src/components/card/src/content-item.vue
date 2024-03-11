<template>
  <el-scrollbar height="300px">
    <el-empty v-if="record.length <= 0" description="暂无记录捏" />
    <el-table
      v-else
      :data="record"
      border
      style="width: 100%"
      :show-header="false"
      :cell-style="cellStyle"
    >
      <el-table-column prop="anime_name" label="anime_name" width="auto">
        <template #default="scope">
          <span v-if="scope.row.index === tabClickIndex && tabClickLabel === 'anime_name'">
            <el-input
              v-model="scope.row.anime_name"
              autosize
              ref="elinput"
              @blur="inputBlur"
              @change="updateAnimeName(scope.row)"
            />
          </span>
          <span v-else>{{ scope.row.anime_name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="watch_status" label="watch_status" width="80" align="center">
        <template #default="scope">
          <span v-if="scope.row.index === tabClickIndex && tabClickLabel === 'watch_status'">
            <el-input
              v-model="scope.row.watch_status"
              ref="elinput"
              @blur="inputBlur"
              @change="updateWatchStatus(scope.row)"
            />
          </span>
          <span v-else>{{ scope.row.watch_status }}</span>
        </template>
      </el-table-column>
    </el-table>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const record = ref([]);

const cellStyle = ({ row, column, rowIndex, columnIndex }: any) => {
  switch (row.watch_status) {
    case "待看":
      if (columnIndex === 1) return { background: "yellow" };
      break;
    case "看完":
      if (columnIndex === 1) return { background: "red", color: "white" };
      break;
    default:
      if (columnIndex === 1) return { background: "" };
      break;
  }
};

const tabClickIndex = ref(null);
const tabClickLabel = ref("");

const inputBlur = () => {};

const updateAnimeName = (row: any) => {};

const updateWatchStatus = (row: any) => {};
</script>
