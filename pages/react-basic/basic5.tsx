import React from "react";

const Component = () => {
  return (
    <div className="mt-5">
      <h1>普通のコンポーネント</h1>
    </div>
  );
};

const Props = ({ children, css }) => {
  return <div className={css}>{children}</div>;
};

const basic5 = () => {
  return (
    <>
      <Component />
      <Props css={"mt-5 bg-red-400"}>
        <h1>propsの使い方</h1>
        <p>propsは親から子に値を渡すことができる</p>
      </Props>
    </>
  );
};

export default basic5;
