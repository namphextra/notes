import { defineStore } from "pinia";

export const useNoteStore = defineStore("notes", {
  state: () => ({
    notes: [],
  }),
  actions: {
    addNote() {
      this.notes.push({
        title: "",
        content: "",
        created_at: Date.now(),
        updated_at: Date.now(),
      });
    },
  },
});
