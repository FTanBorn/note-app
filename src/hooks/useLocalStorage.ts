"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { addNote } from "@/lib/features/noteSlice";
import { Note } from "@/types";

export function useLocalStorage() {
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes.notes);

  // localStorage'dan notları yükle
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes);
      parsedNotes.forEach((note: Note) => {
        dispatch(addNote(note));
      });
    }
  }, []);

  // Notlar değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
}
