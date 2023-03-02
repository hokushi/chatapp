import Check from "../components/check";
import React, { useState, useEffect } from "react";

const DemoCheck = () => {
  const [check, setCheck] = useState(false);

  const demo = () => {
    console.log("demo");
  };

  return (
    <>
      <Check messageID={0} setterfunc={demo} setDeleteCheck={setCheck} />
    </>
  );
};

export default DemoCheck;
