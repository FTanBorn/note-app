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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredNotes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}
