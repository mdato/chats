import React from 'react'
import GoogleButton from 'react-google-button'

import {auth} from '../firebase'
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'

const style = {
    centrar: `flex justify-center w-full h-full`
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const SignIn = () => {
  return (
    <div className={style.centrar}>
        <GoogleButton onClick={googleSignIn} />
    </div>
  )
}

export default SignIn