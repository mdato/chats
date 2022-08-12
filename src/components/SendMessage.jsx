import React, { useState } from 'react';
import {auth, db} from '../firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'

const style = {
  form: `h-12 w-full max-w-[628px] flex text-xl absolute bottom-2`,
  input: `w-full text-xl p-4 bg-gray-900 text-white outline-none border-none`,
  button: `bg-gray-700 px-4 py-1 hover:bg-gray-100 text-[16px]`,
};

const SendMessage = ({scroll}) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Enter a valid message')
        return
    }
    const {uid, displayName, photoURL} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        photoURL,
        timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type='text'
        placeholder='Message'
      />
      <button className={style.button} type='submit'>
      🕊️
      </button>
    </form>
  );
};

export default SendMessage;
