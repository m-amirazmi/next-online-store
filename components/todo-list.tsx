import { prisma } from "@/lib/prisma";

export default async function TodoList() {
  const todos = await prisma.todo.findMany();
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="border">
          <span>{todo.title}</span>
          <span>{todo.description}</span>
        </div>
      ))}
    </div>
  );
}
