<script lang="ts">
import { ElButton, ElTooltip } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { useNoteStore } from "../stores/notes";

export default {
  setup() {
    const noteStore = useNoteStore();
    noteStore.fetchNote();

    const addNote = () => {
      noteStore.addNote();
    };

    return { addNote, noteStore, ElButton, ElTooltip, Plus };
  },
};
</script>

<template>
  <main class="w-screen h-screen grid">
    <header class="col-span-2 h-12 flex items-center justify-center shadow">
      <ElTooltip content="Add new note">
        <ElButton :icon="Plus" circle @click="addNote" />
      </ElTooltip>
    </header>
    <aside class="side-bar w-30 shadow">
      <div v-if="!noteStore.notes.length">No Notes</div>
      <div v-else>
        <div
          class="note"
          v-for="note in noteStore.notes"
          :key="note.created_at"
        >
          {{ note.title || "New note" }}
        </div>
      </div>
    </aside>
    <div class="content"></div>
  </main>
</template>
