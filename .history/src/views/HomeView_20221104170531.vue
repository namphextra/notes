<script setup lang="ts">
import { ElButton, ElTooltip } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
</script>

<template>
  <main class="w-screen h-screen grid">
    <header class="col-span-2 h-12 flex items-center justify-center shadow">
      <ElTooltip content="Add new note">
        <ElButton :icon="Plus" circle />
      </ElTooltip>
    </header>
    <aside class="side-bar w-30 shadow"></aside>
    <div class="content"></div>
  </main>
</template>
