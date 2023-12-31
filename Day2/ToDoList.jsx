import React, { useState } from "react";

const ToDoList = () => {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);
  const [check, setChecked] = useState(false);
  const [checkItem, setCheckItem] = useState([]);
  const handleInput = (e) => {
    const num = e.target.value;
    setInput(num);
  };

  const handleClick = () => {
    setList([...list, input]);
    setInput("");
  };

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };
  const handleCheckBox = (e, index) => {
    const value = e.target.checked;
    setChecked(value);
    console.log(value);

    if (value) setCheckItem([...checkItem, index]);
    else {
      const newCheckList = [...checkItem];
      const i = newCheckList.indexOf(index);
      newCheckList.splice(i, 1);

      setCheckItem(newCheckList);
    }
  };
  return (
    <form>
      <h1>To Do List:</h1>
      <input type="text" value={input} onChange={handleInput} />
      <button type="button" onClick={handleClick}>
        Add
      </button>
      <br />

      {list.map((input, index) => (
        <>
          <input type="checkbox" onChange={(e) => handleCheckBox(e, index)} />
          <h2
            key={index}
            style={{ textDecoration: checkItem.indexOf(index) != -1 ? "line-through" : "" }}
          >
            {input}
            <button type="button" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </h2>
        </>
      ))}
    </form>
  );
};
export default ToDoList;
