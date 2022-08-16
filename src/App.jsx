import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';

import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  appContainer: `max-w-[628px] mx-auto text-center bg-gray-900`,
  sectionContainer: `overflow-auto flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

const App = () => {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <div className={style.appContainer}>
      <section className='{style.sectionContainer}'>
        {/* Navbar */}
        <Navbar />
        {/* Chat */}
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;