import React, { useRef, useEffect, useState } from "react";

const MyComponent = () => {
  const myDivRef = useRef(null); // リファレンスを定義する
  const [scrollPosition, setScrollPosition] = useState(0); // スクロール位置を管理する

  useEffect(() => {
    const div = myDivRef.current; // 参照を取得する
    const handleScroll = () => {
      const scrollTop = div.scrollTop; // scrollTop プロパティを使ってスクロール位置を取得する
      setScrollPosition(scrollTop); // スクロール位置をステートに更新する
    };
    div.addEventListener("scroll", handleScroll); // スクロールイベントにリスナーを追加する
    console.log(scrollPosition);
    return () => {
      div.removeEventListener("scroll", handleScroll); // コンポーネントがアンマウントされたときに、リスナーを削除する
    };
  }, [scrollPosition]);

  return (
    <div ref={myDivRef} style={{ height: "300px", overflow: "auto" }}>
      {/* この div は高さが 1000px でスクロールバーが表示されます */}
      <div style={{ height: "1000px" }}>
        <p>Scroll inside me!</p>
      </div>
      {/* スクロール位置を表示する */}
      <p>Scroll position: {scrollPosition}px</p>
    </div>
  );
};

export default MyComponent;
