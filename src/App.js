import React from 'react';
import Header from './Header'
import Profile from './Profile'
import Main from './Main'

if (localStorage.getItem('page') === null) localStorage.setItem('page', 'profile');

function App() {

  return (
    <div className='wrapper'>
      <Header />
      {(() =>{
        if (localStorage.getItem('page') === 'profile') {
          return (<Profile />)
        }
        else if (localStorage.getItem('page') === 'main') {
          return (<Main />)
        }
      })()}
    </div>
  );
}

export default App;
