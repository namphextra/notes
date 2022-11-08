<script lang="ts">
import { ElButton, ElTooltip, ElInput } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { useNoteStore } from "../stores/notes";
import { ref } from "vue";

export default {
  setup() {
    const noteStore = useNoteStore();
    const noteSelected = ref("");
    noteStore.fetchNote();

    const addNote = () => {
      noteStore.addNote();
    };

    return { addNote, noteStore, noteSelected, ElButton, ElTooltip, Plus };
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
      <div v-if="!Object.keys(noteStore.notes).length">No Notes</div>
      <div v-else>
        <div
          class="note px-4 py-2 cursor-pointer"
          :class="{ 'bg-slate-200': noteSelected === key }"
          v-for="(note, key) in noteStore.notes"
          :key="key"
          @click="noteSelected = key"
        >
          {{ note.title || "New note" }}
        </div>
      </div>
    </aside>
    <div class="content"></div>
  </main>
</template>
