import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Component = () => {
  return <div className="mt-5">コンポーネント</div>;
};

const ReactCheck = () => {
  return (
    <>
      {/* useStateの基本 */}
      <div>
        <div>
          <span className="text-red-500 text-xl ">step1</span> <br />
          <Link href="react-basic/basic1" className="text-3xl">
            useStateとuseEffectについて
          </Link>
        </div>
        <div>
          <span className="text-red-500 text-xl ">step2</span> <br />
          <Link href="react-basic/basic2" className="text-3xl">
            axiosについて
          </Link>
        </div>
        <div>
          <span className="text-red-500 text-xl ">step3</span> <br />
          <Link href="react-basic/basic3" className="text-3xl">
            Linkタグについて
            <br />
            クエリとパスも学ぶよ
          </Link>
        </div>
        <div>
          <span className="text-red-500 text-xl ">step4</span> <br />
          <Link href="react-basic/basic4" className="text-3xl">
            mapの使い方
          </Link>
        </div>
      </div>
      {/* コンポーネントの基本 */}
      <Component />
    </>
  );
};

export default ReactCheck;
