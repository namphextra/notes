<script setup lang="ts">
import { ElButton } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
</script>

<template>
  <main class="w-screen h-screen grid grid-rows-2 grid-cols-2">
    <header class="col-span-2 h-12 flex items-center justify-center">
      <ElButton :icon="Plus" circle />
    </header>
    <aside class="side-bar"></aside>
    <div class="content"></div>
  </main>
</template>
