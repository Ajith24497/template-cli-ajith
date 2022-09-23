import React, { useEffect, useState } from "react";

export default function Table() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(res);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return <div>Table</div>;
}
