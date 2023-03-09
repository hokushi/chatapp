import React, { useState, useEffect } from "react";

const basic1 = () => {
  /* usestateの基本 */
  const [number, setNumber] = useState(1);
  const [boolean, setBoolean] = useState(true);

  /* useEffectの基本 */
  useEffect(() => {
    console.log("変数booleanが変更されたので、useEffectが実行されました");
  }, [boolean]);

  return (
    <>
      <h1>useStateの基本</h1>
      <p>number: {number}</p>
      <p>boolean: {boolean ? "true" : "false"}</p>
      <button className="bg-red-400 mr-2" onClick={() => setNumber(number + 1)}>
        number + 1
      </button>
      <button className="bg-red-400" onClick={() => setBoolean(!boolean)}>
        booleanを反転
      </button>
    </>
  );
};

export default basic1;
