import React from 'react';
import SignIn from './SignIn'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
const style = {
    nav: `bg-[#212121] h-20 mt-1 mb-1 flex justify-between items-center py-4 px-0 relative mb-[10vh]`,
    heading: `text-white text-3xl`
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Bodie's Chat!</h1>
      {user ? <LogOut /> : <SignIn />}

    </div>
  );
};

export default Navbar;
