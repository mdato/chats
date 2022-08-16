import React from 'react'
import {auth} from '../firebase'

const style = {
    button: `bg-[#212121] px-4 py-0`
}


const LogOut = () => {
const signOut = () => {
    signOut(auth)
}

  return (
    <button onClick={() => auth.signOut()} className={style.button}>
        <img width='40px' src={'https://cdn-icons-png.flaticon.com/512/7756/7756285.png'} />
    </button>
  )
}

export default LogOut