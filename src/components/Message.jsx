import React from "react";
import { auth } from "../firebase";

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-xl rounded-br-xl text-[15px]`,
  name: `absolute mt-[-4rem] text-gray-400 text-[10px]`,
  sent: `text-right text-xs bg-[#08b1ff] text-white flex-row-reverse text-end float-right rounded-bl-md rounded-bl-md`,
  received: `text-left text-xs bg-gray-300 text-[#212121] float-left rounded-br-md rounded-bl-xl rounded-tl-none rounded-tr-md`,
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <div className="fila-foto">
          <img className="fotito" src={message.photoURL||"https://th.bing.com/th/id/OIP.1T6eLx5wy5bASJgg7KGcRQHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7"} />
          <p className={style.name}>{message.name}</p>
        </div>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
