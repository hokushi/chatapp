import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Pass = () => {
  const URL = "https://jsonplaceholder.typicode.com/todos";
  const tododata = useRouter();
  const [todo, setTodo] = useState([]);
  const todoid = Number(tododata.query.id);

  const querycheck = () => {
    console.log(tododata);
  };

  const querycheck2 = () => {
    console.log(todo[todoid - 1]);
  };

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <button onClick={querycheck}>queryのcheck</button>
      <button className="bg-red-400" onClick={querycheck2}>
        queryのcheck2
      </button>
    </>
  );
};

export default Pass;
