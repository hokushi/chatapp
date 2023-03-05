import React, { useState, useEffect } from "react";
import axios from "axios";

const Pass = () => {
  const URL = "https://jsonplaceholder.typicode.com/todos";
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <></>;
};

export default Pass;
