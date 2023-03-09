import React, { useState, useEffect } from "react";

const basic4 = () => {
  /* mapの使い方 */
  const maplists = ["a", "b", "c"];
  /* objectの場合 */
  const objects = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
  ];

  return (
    <div className="mt-5">
      <h1>mapの使い方 配列編</h1>
      {maplists.map((list, index) => {
        return (
          <div key={index}>
            <p>{list}</p>
          </div>
        );
      })}
      <h1>mapの使い方 オブジェクト編</h1>
      <div className="mt-5">
        <h1>mapの使い方 配列編</h1>
        {objects.map((object, index) => {
          return (
            <div key={index}>
              <p>
                {object.id}.{object.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default basic4;
