"use client";
import { Task } from "@/types";

type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 border border-zinc-800">
      <label className="flex items-center gap-3 cursor-pointer flex-1">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
          className="w-4 h-4 accent-emerald-500"
        />
        <span className={task.done ? "line-through text-zinc-500" : "text-white"}>
          {task.text}
        </span>
      </label>
      <button
        onClick={() => onDelete(task.id)}
        className="text-zinc-500 hover:text-red-400 text-sm ml-3"
      >
        Excluir
      </button>
    </div>
  );
}