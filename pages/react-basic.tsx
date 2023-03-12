import Link from "next/link";

const ReactCheck = () => {
  return (
    <>
      <div>
        <div className="mt-5">
          <span className="text-red-500 text-xl mt-5">step1</span> <br />
          <Link href="/react-basic/basic1" className="text-3xl">
            useStateとuseEffectについて
          </Link>
        </div>
        <div className="mt-5">
          <span className="text-red-500 text-xl mt-5">step2</span> <br />
          <Link href="/react-basic/basic2" className="text-3xl">
            axiosについて
          </Link>
        </div>
        <div className="mt-5">
          {" "}
          <span className="text-red-500 text-xl mt-5">step3</span> <br />
          <Link href="/react-basic/basic3" className="text-3xl">
            Linkタグについて
            <br />
            クエリとパスも学ぶよ
          </Link>
        </div>
        <div className="mt-5">
          {" "}
          <span className="text-red-500 text-xl mt-5">step4</span> <br />
          <Link href="/react-basic/basic4" className="text-3xl">
            mapの使い方
          </Link>
        </div>
        <div className="mt-5">
          <span className="text-red-500 text-xl">step5</span> <br />
          <Link href="/react-basic/basic5" className="text-3xl">
            コンポーネントの使い方
          </Link>
        </div>
        <div className="mt-5">
          <span className="text-red-500 text-xl">上級編⓪</span> <br />
          <Link href="/react-basic/basic6" className="text-3xl">
            今までのバリデーション
          </Link>
        </div>
        <div className="mt-5">
          <span className="text-red-500 text-xl">上級編①</span> <br />
          <Link href="/react-basic/basic7" className="text-3xl">
            react-fook-formの使い方
          </Link>
        </div>
        <div className="mt-5">
          <span className="text-red-500 text-xl">上級編②</span> <br />
          <Link href="/react-basic/basic8" className="text-3xl">
            zodの使い方
          </Link>
        </div>
        <div className="mt-5">
          <span className="text-red-500 text-xl">上級編③</span> <br />
          <Link href="/react-basic/basic9" className="text-3xl">
            非同期処理を同期処理にする
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactCheck;
