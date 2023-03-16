/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import beatImg from '../../assets/music22.png';
import avatar from '../../assets/icon100.png';

function Login() {
  const [name, setName] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const navigation = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    validationInputName(value);
    setName(value);
  }; 

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => { 
    e.preventDefault;
    const profile = { name: name, img: avatar};

    localStorage.setItem('profile', JSON.stringify(profile));
    navigation('/home');
  };

  const validationInputName = (value: string): void => {
    const inputName = document.querySelector('#loginName');
    if(value.length >= 4) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }

  };


  return (
    <main id="login"
      className="flex flex-col h-screen items-center justify-center
      text-orange-600 text-xl">
      <img className='h-64'
        src={beatImg}></img>
      <div>
        <h1 className="">Faça login com seu nome</h1>
      </div>
      <input id="loginName" className="mt-10 p-1 rounded-md mb-5
      border-2 border-rose-600 text-black
      focus:outline-none focus:ring-4 ring-orange-500"
      onChange={(e) => handleChange(e)}
      type="text" placeholder="Escreva seu nome"/>
      <button disabled={isDisable}
        className={isDisable 
          ? 'ring-2 ring-orange-100 mt-5 w-32 rounded-md' 
          : 'ring-2 ring-orange-500 mt-5 w-32 rounded-md'}
        onClick={(e) => handleClick(e) }>
        Login
      </button>
    </main>
  );
}

export default Login;
