/** @format */

import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  // focus on what you put as Ref:
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // gives id to each todo list item:
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className='todoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Type thing to remember...'
        value={input}
        name='text'
        className='todoFormInput'
        onChange={handleChange}
        ref={inputRef}
      />
      <button className='todoFormBtn'>Add thing</button>
    </form>
  );
}

export default TodoForm;
