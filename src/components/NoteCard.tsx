"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "@/lib/features/noteSlice";
import { Note } from "@/types";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import NoteModal from "./NoteModal";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    if (window.confirm("Bu notu silmek istediğinizden emin misiniz?")) {
      dispatch(deleteNote(note.id));
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-gray-900">{note.title}</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:text-blue-600"
            >
              Düzenle
            </button>
            <button
              onClick={handleDelete}
              className="text-red-500 hover:text-red-600"
            >
              Sil
            </button>
          </div>
        </div>

        <p className="text-gray-600 mb-4 whitespace-pre-wrap">{note.content}</p>

        <div className="flex justify-between items-center text-sm">
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
            {note.category}
          </span>
          <span className="text-gray-500">
            {format(new Date(note.updatedAt), "d MMMM yyyy HH:mm", {
              locale: tr,
            })}
          </span>
        </div>
      </div>

      <NoteModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        editNote={note}
      />
    </>
  );
}
