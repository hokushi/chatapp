import React, { useState, useEffect } from "react";
import Check from "../components/check";
import axios from "axios";

const USERS_URL = "http://localhost:8000/chatapp/get_users";

const SelectChatroom = () => {
  const [users, setUsers] = useState(undefined);

  useEffect(() => {
    axios
      .get(USERS_URL)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (users) {
    return (
      <>
        {users.map((user: { name: string; id: number }, index: number) => {
          return (
            <div key={user.id}>
              <div>{user.name}</div>
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
