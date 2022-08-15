import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import SendMessage from './SendMessage';
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';

const style = {
  main: `scrollbar relative mt-[-10vh] flex flex-col p-[35px] bg-[#212121] text-[#f8f8f8] overflow-y-auto max-h-[74vh]`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  //const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });     
      setMessages(messages);

    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      {/* Send Message Component */}
       <SendMessage /> {/* scroll={scroll} className="overflow-y-auto" */}
      {/* <span ref={scroll}></span> */}
    </>
  );
};

export default Chat;
