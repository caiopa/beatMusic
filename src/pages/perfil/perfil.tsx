import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import avatar from '../../assets/icon100.png';


interface IProfile {
  name: string;
  img?: string;
}


function Perfil() {
  const [name, setName ] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string>('');
  const navigation = useNavigate();
 
  useEffect(() => {

    const profile: IProfile = JSON.parse(localStorage
      .getItem('profile') || '');
    setName(profile.name);
    setSelectedImage(profile.img || '');

  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        const profile = JSON.parse(localStorage.getItem('profile') || '');
        profile.img = reader.result as string;
        localStorage.setItem('profile', JSON.stringify(profile));
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleClick = () => {
    localStorage.removeItem('profile');
    localStorage.removeItem('favorite-musicas');


    navigation('/');
  
  };

  return (
    <div className="flex text-base w-5/6 h-80
    m-auto flex-col items-center justify-evenly mt-20">
      <h1>Seu perfil</h1>
      <div className='flex flex-col items-center'>

        <h1 className='mb-3'>{name}</h1>
        <img 
          className='w-24 mt-5' 
          src={selectedImage} alt="opa"></img>
        <div className='mt-10'>

          <p className='text-xs'>Clique abaixo para alterar sua foto:</p>
          <input className=' text-xs'
            type="file" onChange={handleImageChange}></input>
        </div>
        <div>
          <button className='mt-10 ring-2 ring-orange-500 mt-5 w-32
          rounded-md hover:bg-orange-100 '
          onClick={() => handleClick()}>
            Logout
          </button>
        </div>
      </div>

    </div>
  );
}

export default Perfil;
