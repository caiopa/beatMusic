import React, { useEffect, useState } from 'react';
import FavoritCard from '../../components/favoriteCard/favoriteCard';


interface IMusic {
  musica: {

    artistName: string;
    artworkUrl100: string;
    collectionName: string;
    trackId: number;
    trackName: string;
    previewUrl: string;
  }
}

function Favorias() {
  const [favoritas, setFavoritas] = useState<IMusic[]>([]);

  useEffect(() => {
    const favorteSongs = localStorage.getItem('favorite-musicas');
    if (favorteSongs && favorteSongs !== '') {
      try {
        setFavoritas(JSON.parse(favorteSongs));
      } catch (error) {
        console.error('Erro ao converter JSON:', error);
        setFavoritas([]);
      }
    } else {
      setFavoritas([]);
    }
  }, []);
 

  return (
    <div className="flex text-base w-5/6 m-auto
    flex-col items-center justify-center overflow-y-scroll">
      <h1 className='my-5'>Suas musicas favoritas</h1>
      <div className='flex flex-col max-h-[500px]
      max-w-[500px]:overflow-y-scroll'>

        {
          favoritas.length > 0 ? 
            favoritas.map((item: IMusic, i: number) => (
              <FavoritCard key={i} item={item} />)) :
            <p>Você não tem nenhuma musica como favorita</p>
        }
      </div>
      
     
    </div>
  );
}

export default Favorias;
