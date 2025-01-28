// src/components/NoteList.tsx
"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import NoteCard from "./NoteCard";

export default function NoteList() {
  const { notes, selectedCategory } = useSelector(
    (state: RootState) => state.notes
  );

  const filteredNotes =
    selectedCategory === "Tümü"
      ? notes
      : notes.filter((note) => note.category === selectedCategory);

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
      {filteredNotes.map((note) => (
        <div key={note.id} className="break-inside-avoid mb-4">
          <NoteCard note={note} />
        </div>
      ))}
    </div>
  );
}
