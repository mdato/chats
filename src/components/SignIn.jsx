import React from "react";
//import GoogleButton from 'react-google-button'

import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const style = {
  // centrar: `flex justify-center w-full h-full`,
  // button: `bg-[#212121] px-4 py-0`,
  button: `bg-[#212121] px-4 py-0`,
  // h5: `text-white text-[12px]`,
};

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const SignIn = () => {
  return (
    <div className={style.centrar}>
      <button
        onClick={() => {
          googleSignIn();
        }}
        className={style.button}
      >
        <img
          width="40px"
          src={"https://cdn-icons-png.flaticon.com/512/2111/2111450.png"}
        />
        {/* <h5 className={style.h5}>SignIn</h5> */}
      </button>

      {/* <GoogleButton onClick={googleSignIn} /> */}
    </div>
  );
};

export default SignIn;
