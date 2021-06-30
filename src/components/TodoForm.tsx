import React, { useState } from "react";

interface TProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const keyPressEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (!title) {
        return alert("Задача пустая!");
      }
      props.onAdd(title);
      setTitle("");
    }
  };

  return (
    <>
      <div className={"input-field mt2"}>
        <input
          type="text"
          id={"title"}
          onChange={changeHandler}
          placeholder={"Введите название дела"}
          value={title}
          onKeyPress={keyPressEnter}
        />
        <label htmlFor="title" className={"active"}>
          Введите название дела
        </label>
      </div>
    </>
  );
};
