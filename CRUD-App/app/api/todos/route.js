import { getLoggedInUser } from "@/lib/auth";
import { connectDB } from "@/lib/connectDB";
import Todo from "@/models/todoModel";
import User from "@/models/userModel";
import { cookies } from "next/headers";

export async function GET() {
  await connectDB();
  const user = await getLoggedInUser();

  if (user instanceof Response) {
    return user;
  }
  const allTodos = await Todo.find({ userId: user.userId });

  return Response.json(
    allTodos.map(({ id, title, completed }) => ({ id, title, completed }))
  );
}

export async function POST(request) {
  await connectDB();
  const user = await getLoggedInUser();
  if (user instanceof Response) return user;

  const todo = await request.json();
  const { id, title, completed } = await Todo.create({
    title: todo.title,
    userId: user.userId,
  });

  return Response.json(
    { id, title, completed },
    {
      status: 201,
    }
  );
}
