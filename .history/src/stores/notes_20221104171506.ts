import { ref } from "vue";
import { defineStore } from "pinia";

export const useNoteStore = defineStore("counter", () => {
  const notes = ref([]);

  return { notes };
});
