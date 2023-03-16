import React, { useState, useEffect } from 'react';
import blackHeart  from '../../assets/coracao.png';
import purpleHeart from '../../assets/purple.png';

interface IProps {
  item: {
    musica: {
      collectionName: string;
      trackId: number;
      trackName: string;
      previewUrl: string;
    }
  };
}

function FavoritCard({item}: IProps) {
  const [ isFavorite, setIsFavorite] = useState<boolean>(true);

  useEffect(() => {
    const favoriteSongs = JSON
      .parse(localStorage.getItem('favorite-musicas') || '[]');
    const isFavorite = favoriteSongs
      .some((x: { musica: { trackId: number } }) =>
        x.musica.trackId === item.musica.trackId);
    setIsFavorite(isFavorite);
  }, [item]);

  const handleFavoriteClick = () => {
    const favoriteSongs = JSON
      .parse(localStorage.getItem('favorite-musicas') || '[]');
    const isFavorite = favoriteSongs
      .some((x:  { musica: { trackId: number } }) =>
        x.musica.trackId === item.musica.trackId);

    if (isFavorite) {
      const updatedFavoriteSongs = favoriteSongs
        .filter((x: { musica: { trackId: number } })=>
          x.musica.trackId !== item.musica.trackId);
      localStorage
        .setItem('favorite-musicas', JSON.stringify(updatedFavoriteSongs));
    } else {
      const newFavoriteSong = { musica: item.musica };
      favoriteSongs.push(newFavoriteSong);
      localStorage.setItem('favorite-musicas', JSON.stringify(favoriteSongs));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <div className="">
      {
        <div className='h-[250px] align-center'>
          <div className=''>
            <p>Artista: {item.musica.collectionName}</p>
            <p> Musica: {item.musica.trackName}</p> 
          </div>
          <div className='flex'> 
            <audio className='w-52 h-10 mt-1'
              src={item.musica.previewUrl} controls> 
              <track kind="captions" /> 
                         O seu navegador não suporta o elemento 
              <code>audio</code> 
                         . 
            </audio> 
            <button className=' ml-5'
              type="button" onClick={() => handleFavoriteClick()}>
              <img src={isFavorite ? purpleHeart : blackHeart}/> 
            </button>  
          </div> 
        </div> 
        
      }
    </div>
  );
}

export default FavoritCard;
