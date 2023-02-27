import React from "react";
import Check from "../components/check";

const DemoCheck = () => {
  const demo = () => {
    console.log("demo");
  };

  return (
    <>
      <Check messageID={0} setterfunc={demo} />
    </>
  );
};

export default DemoCheck;
