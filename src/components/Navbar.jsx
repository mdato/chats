import React from 'react';
import SignIn from './SignIn'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Logo from '../favicon.ico';
const style = {
    nav: `bg-[#212121] h-20 mt-1 mb-1 flex justify-between items-center py-4 px-0 relative mb-[10vh]`,
    heading: `text-white text-3xl text-shadow-[0_4px_8px_#6366f1] font-bold`,
    logo: `w-[40px] h-[40px] rounded-full`,
    fototitle: `bg-[#212121] h-20 flex justify-between items-center gap-2`,
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
      <div className={style.fototitle}>
      <img className={style.logo} src={Logo} alt="logo" />
      <h1 className={style.heading}>Bodie's Chat!</h1>
      </div>

      {user ? <LogOut /> : <SignIn />}

    </div>
  );
};

export default Navbar;
