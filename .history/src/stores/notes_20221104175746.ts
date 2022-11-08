import { defineStore } from "pinia";

export const useNoteStore = defineStore("notes", {
  state: () => ({
    notes: [],
  }),
  actions: {
    addNote() {
      this.notes.push({ title: "", content: "" });
    },
  },
});
