"use client";
import { useState } from "react";

export default function TaskForm({ onAdd }: { onAdd: (text: string) => void }) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return; // não adiciona tarefa vazia
    onAdd(text.trim());
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nova tarefa..."
        className="flex-1 px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-emerald-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-emerald-500 text-zinc-950 font-medium rounded-lg hover:bg-emerald-400 transition-colors"
      >
        Adicionar
      </button>
    </form>
  );
}