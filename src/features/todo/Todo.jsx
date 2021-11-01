import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodoItem } from "./TodoItem";
import { addTask } from "./todoSlice";

export const Todo = () => {
  const [input, setInput] = useState("");
  const { tasks } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  console.log(tasks);
  const addTodoTask = () => {
    dispatch(addTask({ id: tasks.length + 1, name: input, completed: false }));
    setInput("");
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={addTodoTask}>Add Task</button>

      {tasks.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </>
  );
};
