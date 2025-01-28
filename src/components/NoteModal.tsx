"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import NoteForm from "./NoteForm";
import { Note } from "@/types";

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  editNote?: Note;
}

export default function NoteModal({
  isOpen,
  onClose,
  editNote,
}: NoteModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 mb-4"
                >
                  {editNote ? "Notu Düzenle" : "Yeni Not"}
                </Dialog.Title>
                <NoteForm onClose={onClose} editNote={editNote} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
