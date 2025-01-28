"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, updateNote } from "@/lib/features/noteSlice";
import { RootState } from "@/lib/store";
import { Note } from "@/types";

interface NoteFormProps {
  editNote?: Note;
  onClose: () => void;
}

export default function NoteForm({ editNote, onClose }: NoteFormProps) {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.notes.categories);

  const [title, setTitle] = useState(editNote?.title || "");
  const [content, setContent] = useState(editNote?.content || "");
  const [category, setCategory] = useState(editNote?.category || categories[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const noteData: Note = {
      id: editNote?.id || Date.now().toString(),
      title,
      content,
      category,
      createdAt: editNote?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (editNote) {
      dispatch(updateNote(noteData));
    } else {
      dispatch(addNote(noteData));
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Başlık
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 text-black block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          İçerik
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="mt-1 block w-full text-black rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Kategori
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full text-black rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          İptal
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          {editNote ? "Güncelle" : "Oluştur"}
        </button>
      </div>
    </form>
  );
}
