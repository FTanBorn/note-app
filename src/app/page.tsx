// src/app/page.tsx

import NoteContainer from "../components/NoteContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <NoteContainer />
      </div>
    </main>
  );
}
