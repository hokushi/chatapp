import React, { useState, useEffect } from "react";
import axios from "axios";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [sendList, setSendList] = useState(undefined);
  const [getMessage, setGetMessage] = useState(undefined);
  const MessageURL = "http://localhost:8000/chatapp/get_message";

  const send = () => {
    const sendObject: { id: number; message: string } = {
      id: 3,
      message: message,
    };
    const newSendList: any = [...sendList, sendObject];
    setSendList(newSendList);
    localStorage.setItem("send", JSON.stringify(newSendList));
    setMessage("");
  };

  useEffect(() => {
    /*if (!localStorage.getItem("send")) {
      return;
    }
    const existingmessage = JSON.parse(localStorage.getItem("send"));
    if (existingmessage) {
      setSendList(existingmessage);
    }*/
    axios
      .get(MessageURL)
      .then((res) => {
        setSendList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (sendList) {
    return (
      <>
        <div className="fixed top-0 w-full mx-auto bg-slate-300">
          <h1 className="right-0 text-3xl float-left">▷</h1>
          <h1 className="text-3xl flex justify-center">
            {sendList[0].sendername}
          </h1>
        </div>
        <div className="my-10 overflow-y-scroll h-auto">
          {sendList.map(
            (
              sendthing: {
                sendername_id: number;
                message: string;
                sendername: string;
              },
              index: number
            ) => {
              if (sendthing.sendername_id == 3) {
                return (
                  <div className="overflow-hidden">
                    <div className="float-right mt-0">
                      <div className="rounded-t-md border-2 px-2 py-0 mt-1 text-base bg-gray-300">
                        {sendthing.message}
                      </div>
                    </div>
                  </div>
                );
              }
              if (sendthing.sendername_id == 1) {
                return (
                  <div className="overflow-hidden">
                    <div className="float-left">
                      <div className="float-left">
                        {sendthing.sendername_id}
                      </div>
                      <div className="rounded-t-md border-2 ml-4 px-2 py-0 mt-1 text-base">
                        {sendthing.message}
                      </div>
                    </div>
                  </div>
                );
              }
            }
          )}
        </div>
        <div className="fixed bottom-0 w-full px-0 mx-auto mt-10 bg-slate-300">
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
            className="absolute right-0 bottom-0 bg-slate-300 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            送信
          </button>
        </div>
      </>
    );
  } else {
    return;
  }
};

export default Chat;
