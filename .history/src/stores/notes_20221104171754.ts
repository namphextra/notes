import { ref } from "vue";
import { defineStore } from "pinia";

export const useNoteStore = defineStore("notes", () => {
  const notes = ref([]);

  return { notes };
});
