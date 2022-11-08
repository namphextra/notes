import { defineStore } from "pinia";
import { collection, addDoc, getDocs } from "firebase/firestore";
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
      await addDoc(collection(db, "notes"), {
        title: "",
        content: "",
        created_at: Date.now(),
        updated_at: Date.now(),
      });
    },
    async fetchNote() {
      const querySnapshot = await getDocs(collection(db, "notes"));
      querySnapshot.forEach((doc) => {
        console.log(doc);
      });
    },
  },
});
