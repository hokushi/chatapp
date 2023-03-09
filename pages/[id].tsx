import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Hoge = () => {
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    console.log("routerとは", router);
    console.log("idの値は", id);
  }, []);

  return <div>hoge</div>;
};

export default Hoge;
