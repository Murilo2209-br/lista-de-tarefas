"use client";
import { useEffect, useState } from "react";
import { Task } from "@/types";
import TaskForm from "@/components/TaskForm";
import TaskItem from "@/components/TaskItem";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("tarefas");
    return saved ? JSON.parse(saved) : [];
  });

  // salva no localStorage toda vez que a lista mudar
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text: string) {
    setTasks((prev) => [...prev, { id: crypto.randomUUID(), text, done: false }]);
  }

  function toggleTask(id: string) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  const restantes = tasks.filter((t) => !t.done).length;

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-1">Lista de Tarefas</h1>
        <p className="text-zinc-500 mb-6">
          {tasks.length === 0 ? "Nenhuma tarefa ainda" : `${restantes} de ${tasks.length} pendente(s)`}
        </p>

        <TaskForm onAdd={addTask} />

        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
          ))}
        </div>
      </div>
    </main>
  );
}