"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import NoteList from "./NoteList";
import NoteModal from "./NoteModal";
import CategoryFilter from "./CategoryFilter";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function NoteContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const notes = useSelector((state: RootState) => state.notes.notes);

  // localStorage entegrasyonu
  useLocalStorage();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Notlarım</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Yeni Not
        </button>
      </div>

      <CategoryFilter />

      {notes.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          Henüz not eklenmemiş. Yeni bir not eklemek için butona tıklayın.
        </div>
      ) : (
        <NoteList />
      )}

      <NoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
