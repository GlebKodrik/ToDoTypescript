import React, { useCallback, useState } from "react";
import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { ITodo } from "./interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, completed: true, title: "Глеб" },
  ]);

  debugger;

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const removeHandler = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const toggleHandler = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
          // todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }, []);

  return (
    <>
      <Navbar />
      <div className={"container"}>
        {/*<TodoForm onAdd={addHandler} />*/}
        <TodoList
          todos={todos}
          onRemove={removeHandler}
          onToggle={toggleHandler}
        />
      </div>
    </>
  );
};
export default App;
