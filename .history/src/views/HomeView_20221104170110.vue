<script setup lang="ts">
import { ElButton, ElTooltip } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
</script>

<template>
  <main class="w-screen h-screen grid grid-rows-2 grid-cols-2">
    <header
      class="col-span-2 h-12 flex items-center justify-center shadow layout-header"
    >
      <ElTooltip content="Add new note">
        <ElButton :icon="Plus" circle />
      </ElTooltip>
    </header>
    <aside class="side-bar w-30 shadow"></aside>
    <div class="content"></div>
  </main>
</template>
