import React, { useState } from "react";

// emailとpassword
const basic8 = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  /**エラーメッセージ */
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [mailErrorMessage, setMailErrorMessage] = useState("");

  const handleSend = () => {
    if (name) {
      console.log("送信");
    } else {
      setNameErrorMessage("名前は必須です。");
    }
    if (mail) {
      /**正規表現でメアドの型 */
      const regex =
        /^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/;
      if (regex.test(mail)) {
        console.log("送信");
        setMailErrorMessage("");
        setNameErrorMessage("");
      } else {
        setMailErrorMessage("メアドの形式が違います。");
      }
    } else {
      setMailErrorMessage("メアドは必須です。");
    }
  };

  return (
    <>
      <h1 className="text-red-600 text-2xl">今までのバリデーション</h1>
      <p className="mt-7">今まではuseStateを使っていた</p>
      <p className="mt-3">name</p>
      <input
        className="block p-2 w-full text-sm  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-700 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
        type="text"
        placeholder="ほくし"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      {name ? <p></p> : <p className="text-red-500">{nameErrorMessage}</p>}
      <p className="mt-3">メアド</p>
      <input
        className="block p-2 w-full text-sm  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-700 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
        type="text"
        placeholder="lkdslkfjl@icloud.com"
        onChange={(e) => setMail(e.target.value)}
        value={mail}
      ></input>

      {mailErrorMessage && <p className="text-red-500">{mailErrorMessage}</p>}

      <button onClick={handleSend}>送信</button>
    </>
  );
};

export default basic8;
