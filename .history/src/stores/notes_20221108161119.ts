import { defineStore } from "pinia";
import { collection, addDoc, getDocs } from "firebase/firestore";
import db from "../db/firebase";
import type { Note, NoteState } from "@/types";

export const useNoteStore = defineStore("notes", {
  state: () => ({
    notes: {} as NoteState,
  }),
  actions: {
    async addNote() {
      const data: Note = {
        title: "",
        content: "",
        created_at: Date.now(),
        updated_at: Date.now(),
      };
      const resDoc = await addDoc(collection(db, "notes"), {
        title: "",
        content: "",
        created_at: Date.now(),
        updated_at: Date.now(),
      });
      this.notes[resDoc.id] = data;
    },
    async fetchNote() {
      const querySnapshot = await getDocs(collection(db, "notes"));
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    },
  },
});
