import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
 
      
  return (
    <nav className="flex justify-evenly items-center
    h-14 bg-slate-800 text-orange-600 text-base">

      <Link className='hover:underline hover:decoration-double
      hover:underline-offset-8 hover:decoration-red-500
      activ:underline activ:decoration-double
      activ:underline-offset-8 activ:decoration-red-500'
      to={'/home'}>Pesquisa</Link>
      <Link className='hover:underline hover:decoration-double
        hover:underline-offset-8 hover:decoration-red-500'
      to={'/favoritas'}>Favoritas</Link>
      <Link  className='hover:underline hover:decoration-double
      hover:underline-offset-8 hover:decoration-red-500'
      to={'/perfil'}>Perfil</Link>
 

    </nav>
  );
}

export default NavBar;
