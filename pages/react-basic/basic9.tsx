import { useState, useEffect } from "react";

const syncronization = () => {
  let int1 = 0;
  let int2 = 0;

  /* 非同期のまま */
  const set_int = (a, b) => {
    setTimeout(() => {
      int1 = a;
      int2 = b;
    }, 1000);
  };

  const sum_int = () => {
    alert(int1 + int2);
  };

  const merge_int = () => {
    set_int(1, 2);
    sum_int();
  };

  /* コールバックを使った同期 */
  /* 非同期の中に同期を入れちゃうイメージ */
  const set_int2 = (a, b, callback) => {
    setTimeout(() => {
      int1 = a;
      int2 = b;
      callback();
    }, 1000);
  };

  const sum_int2 = () => {
    alert(int1 + int2);
  };

  /* promiseを使った関数 */

  const check = () => {
    const set_int3 = (a, b) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          int1 = a;
          int2 = b;
          resolve(); // 処理完了
          reject(); // 処理失敗
        }, 1000);
      });
    };

    const sum_int3 = () => {
      alert(int1 + int2);
    };

    set_int3(1, 2).then(() => {
      sum_int3();
    });
    set_int3(1, 2).catch(() => {
      alert("...err");
    });
  };

  /* promiseを使った確認２ */
  const [number, setNumber] = useState(0);

  const checkmain2 = () => {
    const checksub2 = () => {
      return new Promise((resolve, reject) => {
        setNumber(2);
        resolve();
        reject();
      });
    };
    checksub2().then(() => {
      console.log(number);
    });
    checksub2().catch(() => {
      console.log("...err");
    });
  };

  return (
    <>
      <button className="mt-5" onClick={merge_int}>
        非同期のまま
      </button>
      <br />
      <button
        className="mt-5"
        onClick={() => {
          set_int2(1, 2, sum_int2);
        }}
      >
        コールバックを使った同期
      </button>
      <br />
      <button className="mt-5" onClick={check}>
        promiseを使った同期
      </button>
      <br />
      <button className="mt-5" onClick={checkmain2}>
        promiseを使った同期2
      </button>
    </>
  );
};

export default syncronization;
