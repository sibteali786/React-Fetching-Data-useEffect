import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  let data = { title: "Waiting for the data" };
  const [todo, setTodo] = useState(data);
  const [isFetching, setFetching] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setFetching(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/1`
    );
    console.log("response = ", response);
    let data = await response.json();
    setTodo(data);
    setFetching(false);
    console.log("Data = ", data);
  }

  if (isFetching) {
    return <div>Data Loading......</div>;
  }
  return (
    <div className="App">
      Hello
      <span>Title : {todo.title}</span>
    </div>
  );
}

export default App;
