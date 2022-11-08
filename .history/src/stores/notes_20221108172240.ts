import { defineStore } from "pinia";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
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
      const resDoc = await addDoc(collection(db, "notes"), data);
      this.notes[resDoc.id] = data;
    },
    async updateNote(id: string, data: Note) {
      const docRef = doc(db, "notes", id);
      await updateDoc(docRef, data);
    },
    async fetchNote() {
      const querySnapshot = await getDocs(collection(db, "notes"));
      querySnapshot.forEach((doc) => {
        this.notes[doc.id] = doc.data() as Note;
      });
    },
  },
});
