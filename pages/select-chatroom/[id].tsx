import React, { useState, useEffect } from "react";
import Check from "../../components/check";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const USERS_URL = "http://localhost:8000/chatapp/user";

const SelectChatroom = () => {
  const [users, setUsers] = useState(undefined);
  const router = useRouter().query.id;

  useEffect(() => {
    axios
      .get(USERS_URL)
      .then((res) => {
        console.log(res.data);
        console.log(router);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (users) {
    return (
      <>
        <div className="text-5xl bg-slate-200">トーク</div>
        {users.map((user: { name: string; id }, index: number) => {
          {
            /* バックエンドができていないからuser.idが違う */
          }
          if (user.id !== router)
            return (
              <div>
                <div className="w-full grid grid-cols-10 my-1" key={user.id}>
                  <div className="col-start-1 col-end-2 text-5xl bg-slate-400">
                    {user.id}
                  </div>
                  <Link
                    className="col-start-2 col-end-11 text-base"
                    href={`/chatroom/${user.id}`}
                  >
                    {user.name}
                  </Link>
                </div>
              </div>
            );
        })}
      </>
    );
  } else {
    return <div>loading...</div>;
  }
};

export default SelectChatroom;
