import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "./todoSlice";

export const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [editText, setEditText] = useState(item.name);

  const updateItem = () => {
    dispatch(updateTask({ id: item.id, name: editText }));
    setIsEditable(false);
  };

  return (
    <div key={item.id}>
      {isEditable ? (
        <input
          type="text"
          value={editText}
          onChange={(event) => setEditText(event.target.value)}
        />
      ) : (
        <p>{item.name}</p>
      )}

      {isEditable ? (
        <button onClick={() => updateItem()}>Done</button>
      ) : (
        <button onClick={() => setIsEditable(true)}>Edit</button>
      )}
      <button onClick={() => dispatch(deleteTask(item.id))}>Delete</button>
    </div>
  );
};
