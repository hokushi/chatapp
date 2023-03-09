import Link from "next/link";

const Basic3Page = () => {
  return (
    <>
      <h1>Linkタグについて</h1>
      <p>Linkタグはページ遷移を行うタグです。</p>
      <p>
        Linkタグを使うことで、ページ遷移を行う際にページをリロードすることなく、ページ遷移を行うことができます。
      </p>
      <p>
        Linkタグを使う際には、pagesディレクトリの中にあるファイルを指定する必要があります。
      </p>
      <p>aタグの際は再レンダリング走る</p>

      <h1 className="mt-5 text-2xl font-bold text-red-600">
        パスとクエリを使ってみよう
      </h1>
      <div className="mt-5">
        <Link href="/register">普通のページ遷移</Link>
      </div>
      <div className="mt-5">
        <Link href="/8478hhjhehi8y4983y">passページ遷移</Link>
      </div>
      <div className="mt-5">
        <Link href={{ pathname: "/query", query: { id: 1 } }}>
          queryページ遷移
        </Link>
      </div>
    </>
  );
};

export default Basic3Page;
