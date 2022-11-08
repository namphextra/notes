<script setup lang="ts">
import { ElButton } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
</script>

<template>
  <main class="w-screen h-screen grid grid-rows-2 grid-cols-2">
    <header class="col-span-2 layout-header">
      <ElButton :icon="Plus">Add new note</ElButton>
    </header>
    <aside class="side-bar"></aside>
    <div class="content"></div>
  </main>
</template>
