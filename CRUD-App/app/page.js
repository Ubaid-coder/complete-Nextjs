"use client";

import { useEffect, useState } from "react";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [todos, setTodos] = useState([]);
  const [showmenu, setshowmenu] = useState(false);
  const [userdata, setuserData] = useState();
  const { theme = "dark", setTheme } = useTheme();

  useEffect(() => {
    fetchTodos();
    fetchuser();
  }, []);

  const fetchuser = async () => {
    const response = await fetch("/api/user");
    const data = await response.json();
    if (response.status === 401) {
      return router.push("/login");
    }
    setuserData(data);
    return userdata;
  }

  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json();
    if (response.status === 401) {
      return router.push("/login");
    }
    if (!data.error) {
      setTodos(data.reverse());
    }
  };

  // Add new todo
  const addTodo = async (title) => {
    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const newTodo = await response.json();
    setTodos([newTodo, ...todos]);
  };

  // Delete todo
  const deleteTodo = async (id) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });

    if (response.status === 204) {
      fetchTodos();
    }
  };

  // Toggle todo completion
  const toggleTodo = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const response = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({ completed: !todo.completed }),
    });

    if (response.status === 200) {
      fetchTodos();
    }
  };

  // Update todo text
  const updateTodo = async (id, newText) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title: newText }),
    });

    if (response.status === 200) {
      fetchTodos();
    }
  };

  const handleLogout = async () => {
    const response = await fetch(`/api/logout`, {
      method: "POST"
    });
    if (response.status == 204)
      return router.push('/login')
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6">
      <div className="w-full max-w-lg">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
           MY Todo App
          </h1>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
          <div>
            <button  className="relative border px-5 py-1 cursor-pointer "  onClick={() => setshowmenu(!showmenu)}> Profile</button>
            <div className={`${showmenu ? "flex" : "hidden"}  duration-300 flex-col justify-center gap-10 bg-gray-800 z-5 border w-auto min-h-40 pb-5 absolute top-10 rounded-2xl`}>
              <h3 className="border-b px-5"><b>{userdata?.name}</b></h3>
              <h3 className="border-b px-5"><b>{userdata?.email}</b></h3>
              <button onClick={handleLogout} className="duration-200 cursor-pointer hover:bg-red-400 hover:border-red-950 border border-red-400 w-fit  self-center bg-red-950 px-5 py-1">Logout</button>
            </div>
          </div>
        </header>

        <TodoForm addTodo={addTodo} />

        <main className="mt-6">
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        </main>
      </div>
    </div>
  );
}
