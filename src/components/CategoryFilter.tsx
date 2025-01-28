"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { setSelectedCategory } from "@/lib/features/noteSlice";

export default function CategoryFilter() {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector(
    (state: RootState) => state.notes
  );

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      <button
        onClick={() => dispatch(setSelectedCategory("Tümü"))}
        className={`px-4 py-2 rounded-md whitespace-nowrap ${
          selectedCategory === "Tümü"
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-600 hover:bg-gray-50"
        }`}
      >
        Tümü
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => dispatch(setSelectedCategory(category))}
          className={`px-4 py-2 rounded-md whitespace-nowrap ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
