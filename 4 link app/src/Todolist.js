import React, { useState, useEffect } from "react";

export const TodoList = ({ allTodos, setAllTodos }) => {
  const [newValue, setNewValue] = useState("");
  const handleLine = (listItem) => {
    console.log(listItem);
    let updatedTodos = allTodos.map((todo) => {
      if (listItem.key === todo.key) {
        return {
          ...todo,
          isDone: !todo.isDone
        };
      } else {
        return todo;
      }
    });
    setAllTodos(updatedTodos);
  };
  const handleEditSubmit = (e, listItem) => {
    e.preventDefault();
    let updatedTodos = allTodos.map((todo) => {
      if (listItem.key === todo.key) {
        return {
          ...todo,
          name: newValue,
          isEditing: false,
          isSelected: false
        };
      } else {
        return todo;
      }
    });
    setAllTodos(updatedTodos);
  };

  const handleEdit = (e, listItem) => {
    let updatedTodos = allTodos.map((todo) => {
      if (listItem.key === todo.key) {
        return {
          ...todo,
          isEditing: true,
          isDone: false
        };
      } else {
        return {
          ...todo,
          isEditing: false
        };
      }
    });
    setNewValue(listItem.name);
    setAllTodos(updatedTodos);
  };

  const handleChange = (e, listItem) => {
    let updatedTodos = allTodos.map((todo) => {
      if (listItem.key === todo.key) {
        return {
          ...todo,
          isSelected: e.target.checked,
          isEditing: false
        };
      } else {
        return todo;
      }
    });
    setAllTodos(updatedTodos);
  };

  const handleDelete = (listItem) => {
    setAllTodos(
      allTodos.filter((item) => {
        return item.key !== listItem.key;
      })
    );
  };

  return (
    <div>
      {allTodos.map((listItem, index) => {
        return (
          <div key={index}>
            <input
              checked={listItem.isSelected}
              type="checkbox"
              onChange={(e) => handleChange(e, listItem)}
            />
            <span
              className={listItem.isDone === true ? "done" : ""}
              onClick={() => handleLine(listItem)}
            >
              {" "}
              {index + 1}. {listItem.name}{" "}
            </span>
            {listItem.isSelected === true && (
              <span>
                {!listItem.isEditing && (
                  <div>
                    <button onClick={() => handleDelete(listItem)}>
                      delete
                    </button>
                    <button onClick={(e) => handleEdit(e, listItem)}>
                      edit
                    </button>
                  </div>
                )}

                {listItem.isEditing === true && (
                  <form onSubmit={(e) => handleEditSubmit(e, listItem)}>
                    <input
                      onChange={(e) => {
                        setNewValue(e.target.value);
                      }}
                      value={newValue}
                    />
                  </form>
                )}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};
