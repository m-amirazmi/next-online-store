import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default function TodoForm() {
  const actionSubmit = async (formData: FormData) => {
    "use server";
    await prisma.todo.create({
      data: {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
      },
    });
    revalidatePath("/admin");
  };

  return (
    <form action={actionSubmit} className="flex flex-col">
      <input
        type="text"
        name="title"
        placeholder="title"
        id="title"
        className="border p-4"
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        id="title"
        className="border p-4"
      />
      <input
        type="submit"
        value="add"
        className="cursor-pointer bg-blue-500 p-4"
      />
    </form>
  );
}
