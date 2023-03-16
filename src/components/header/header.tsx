import React from 'react';

function Header() {
  const profileUser = JSON.parse(localStorage.getItem('profile') || '');
 
      
  return (
    <header className="flex justify-evenly items-center
    h-14 bg-gradient-to-r from-gray-900 via-orange-500 to-gray-900
    text-black text-base">
      <h3 className=''>Bem vindo</h3> 
      <div className='flex  '>
        <p className='mx-5 flex items-center '>{profileUser?.name}</p>
        <img src={profileUser?.img} className="w-12 h-12"></img>
      </div> 
    </header>
  );
}

export default Header;
