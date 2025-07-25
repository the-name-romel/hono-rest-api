import { db } from "@/db/db";
import { todos } from "@/db/schema";
import { NewTodo } from "@/types";
import { desc, eq } from "drizzle-orm";

export const createTodo = async (data: NewTodo) => {
  const [todo] = await db.insert(todos).values(data).returning();
  return todo;
};

export const getTodoByUserId = async (userId: string) => {
  const todoList = await db
    .select()
    .from(todos)
    .where(eq(todos.userId, userId))
    .orderBy(desc(todos.createdAt));
  return todoList;
};
