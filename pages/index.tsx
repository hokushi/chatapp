import React, { useState, useEffect } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [sendList, setSendList] = useState([{ id: 2, message: "hoge" }]);

  const send = () => {
    const sendObject: { id: number; message: string } = {
      id: 1,
      message: message,
    };
    const newSendList: any = [...sendList, sendObject];
    setSendList(newSendList);
    localStorage.setItem("send", JSON.stringify(newSendList));
    setMessage("");
  };

  useEffect(() => {
    if (!localStorage.getItem("send")) {
      return;
    }
    const existingmessage = JSON.parse(localStorage.getItem("send"));
    if (existingmessage) {
      setSendList(existingmessage);
    }
  }, []);

  return (
    <>
      <div className="px-2 py-2 bg-slate-300">
        <div className="float-left text-3xl">▷</div>
        <div className="text-3xl flex justify-center">グループ名</div>
      </div>
      <div>
        {sendList.map(
          (sendthing: { id: number; message: string }, index: number) => {
            if (sendthing.id == 1) {
              return (
                <div>
                  <p className="flex justify-end">{sendthing.message}</p>
                </div>
              );
            }
            if (sendthing.id == 2) {
              return (
                <div>
                  <p>{sendthing.id}</p>
                  <p className="flex justify-start">{sendthing.message}</p>
                </div>
              );
            }
          }
        )}
      </div>
      <></>
      <div className="relative w-full px-2 mx-auto mt-10">
        <input
          type="search"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="block w-full p-2 pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-700 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
          placeholder="message"
          required
        />
        <button
          type="submit"
          onClick={send}
          className="absolute right-2.5 bottom-0 bg-slate-300 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          送信
        </button>
      </div>
    </>
  );
};

export default Chat;
