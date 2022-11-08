import { defineStore } from "pinia";
import { collection, addDoc } from "firebase/firestore";
import db from "../db/firebase";
import type { Note } from "@/types";

export const useNoteStore = defineStore("notes", {
  state: () => ({
    notes: [] as Note[],
  }),
  actions: {
    async addNote() {
      this.notes.push({
        title: "",
        content: "",
        created_at: Date.now(),
        updated_at: Date.now(),
      });
      const res = await addDoc(collection(db, "notes"), {
        title: "",
        content: "",
        created_at: Date.now(),
        updated_at: Date.now(),
      });
      console.log(222, res);
    },
  },
});
