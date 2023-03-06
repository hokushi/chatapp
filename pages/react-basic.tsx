import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Component = () => {
  return <div className="mt-5">コンポーネント</div>;
};

const ReactCheck = () => {
  /* usestateの基本 */
  const [number, setNumber] = useState(1);
  const [boolean, setBoolean] = useState(true);
  /* mapの使い方 */
  const maplists = ["a", "b", "c"];
  /* useEffectの基本 */
  useEffect(() => {
    console.log("useEffectが実行されました");
  }, []);
  /* axiosを使ってみよう */
  const axiosCheck = () => {
    const URL = "https://jsonplaceholder.typicode.com/todos";
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* useStateの基本 */}
      <div>
        <h1>useStateの基本</h1>
        <p>number: {number}</p>
        <p>boolean: {boolean ? "true" : "false"}</p>
        <button
          className="bg-red-400 mr-2"
          onClick={() => setNumber(number + 1)}
        >
          number + 1
        </button>
        <button className="bg-red-400" onClick={() => setBoolean(!boolean)}>
          booleanを反転
        </button>
        {/* mapの使い方 */}
        <div className="mt-5">
          <h1>mapの使い方</h1>
          {maplists.map((list, index) => {
            return (
              <div key={index}>
                <p>{list}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* コンポーネントの基本 */}
      <Component />
      {/* axiosの基本 */}
      <button className="mt-5" onClick={axiosCheck}>
        axios通信
      </button>
      {/* Linkタグについて */}
      <div className="mt-5">
        <Link href="/register">ページ遷移</Link>
      </div>
      <div className="mt-5">
        <Link href="/hogehoge">passページ遷移</Link>
      </div>
      <div className="mt-5">
        <Link href={{ pathname: "/query", query: { id: 1 } }}>
          queryページ遷移
        </Link>
      </div>
    </>
  );
};

export default ReactCheck;
