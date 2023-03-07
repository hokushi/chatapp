import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Pass = () => {
  const URL = "https://jsonplaceholder.typicode.com/todos";
  const router = useRouter();
  const [todo, setTodo] = useState([]);
  const todoid = Number(router.query.id);

  const querycheck = () => {
    console.log(router);
    console.log(router.query.id);
  };

  const querycheck2 = () => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        console.log(res.data[todoid - 1]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>queryのcheckをしよう</h1>
      <button className="bg-red-400" onClick={querycheck}>
        queryのcheck
      </button>
      <h1>今までを使ってデータ表示</h1>
      <button className="bg-red-400" onClick={querycheck2}>
        queryのcheck2
      </button>
    </>
  );
};

export default Pass;
