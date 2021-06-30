import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import React, { useEffect, useState } from "react";
import { ITodo } from "../interfaces";

export const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  debugger;
  useEffect(() => {
    const save = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(save);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm(
      "Вы уверены, что хотите удалить задачу?"
    );
    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <TodoForm onAdd={addHandler} />
      {/*<TodoList*/}
      {/*  todos={todos}*/}
      {/*  onRemove={removeHandler}*/}
      {/*  onToggle={toggleHandler}*/}
      {/*/>*/}
    </>
  );
};
