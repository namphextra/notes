<script setup lang="ts">
import { ElButton } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
</script>

<template>
  <main class="w-screen h-screen grid">
    <header>
      <ElButton :icon="Plus">Add new note</ElButton>
    </header>
    <aside class="side-bar"></aside>
  </main>
</template>
