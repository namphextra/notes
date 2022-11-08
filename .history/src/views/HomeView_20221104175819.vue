<script lang="ts">
import { ElButton, ElTooltip } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { useNoteStore } from "../stores/notes";

export default {
  setup() {
    const noteStore = useNoteStore();

    return { noteStore, ElButton, ElTooltip, Plus };
  },
};
</script>

<template>
  <main class="w-screen h-screen grid">
    <header class="col-span-2 h-12 flex items-center justify-center shadow">
      <ElTooltip content="Add new note">
        <ElButton :icon="Plus" circle @click="noteStore.addNote" />
      </ElTooltip>
    </header>
    <aside class="side-bar w-30 shadow">
      <div v-if="!noteStore.notes.length">No Notes</div>
    </aside>
    <div class="content"></div>
  </main>
</template>
