import React, { useState } from 'react';
import Albums from '../../components/albuns/albuns';
import { fetchAlbunsAPI } from '../../utils/getApi';

function Home() {
  const [ artistSearch, setartistSearch ] = useState('');
  const [ isLoading, setIsLoading ] = useState(true);
  const [ albuns, setAlbuns ] = useState([]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setartistSearch(e.target.value);
  };

  const handleClick = async () => {

    const fetchAlbuns = await fetchAlbunsAPI(artistSearch);
    const resultFetch = fetchAlbuns.results;
    setIsLoading(false);
    setAlbuns(resultFetch);
  };

  return (
    <main className="flex text-base m-auto
    flex-col items-center justify-center ">
      <div className='h-28'>

        <h2 className='m-auto text-center mt-5 font-mono'
        >Digite nome do cantor de sua preferência
        e acesso as melhores musicas
        </h2>
        
      
        <div className='w-100 m-auto text-center'>
          <input onChange={(e) => handleChange(e)}
            className="my-5 ring-1 p-1 text-black ring-orange-100 rounded-md
            focus:outline-none focus:ring-4 ring-orange-500"
            type="text" value={artistSearch}
            placeholder="Digite o nome de uma banda"></input>
          <button className='rounded-md p-1 hover:bg-orange-500 hover:text-black
          font-mono w-36 sm:ml-10 ring-2 ring-orange-100'
          onClick={() => handleClick()}>
        Pesquisar
          </button>
        </div>
      </div>
      <div className='h-auto mt-[130px] w-5/6 flex 
      justify-center items-center '>
        {
          isLoading ? (<p className='font-mono pt-10'
          >Nenhum artista foi pesquisado</p>) :
            <Albums albuns={albuns} artistSearch={artistSearch}/>
        }
      </div>
    </main>
  );
}

export default Home;
