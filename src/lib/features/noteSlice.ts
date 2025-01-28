// src/lib/features/noteSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "@/types";

interface NoteState {
  notes: Note[];
  categories: string[];
  selectedCategory: string;
}

const initialState: NoteState = {
  notes: [],
  categories: ["İş", "Kişisel", "Alışveriş", "Diğer"],
  selectedCategory: "Tümü",
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      if (index !== -1) {
        state.notes[index] = action.payload;
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { addNote, updateNote, deleteNote, setSelectedCategory } =
  noteSlice.actions;
export default noteSlice.reducer;
