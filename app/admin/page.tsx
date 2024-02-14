import TodoForm from "@/components/todo-form";
import TodoList from "@/components/todo-list";

export default function AdminPage() {
  return (
    <div className="max-w-6xl px-4 mx-auto">
      <div className="flex flex-col w-full h-full items-center justify-center">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}
