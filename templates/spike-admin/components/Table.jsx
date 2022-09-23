import React, { useEffect, useState } from "react";

export default function Table({ pageId }) {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await fetch(`http://localhost:8080/page-todo-list/${pageId}`);
    const data = await res.json();

    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      {todos?.map((el) => (
        <div
          style={{
            width: "max-content",
            height: "max-content",
            padding: "8px 12px ",
            backgroundColor: "antiquewhite",
            borderRadius: "4px",
            marginTop: "8px",
            marginLeft: "12px",
          }}
          key={el.id}
        >
          {el.name} - {el.status}
        </div>
      ))}
    </div>
  );
}
