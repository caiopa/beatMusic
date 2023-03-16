import React, { useState, useEffect  } from 'react';
import blackHeart  from '../../assets/coracao.png';
import purpleHeart from '../../assets/purple.png';

interface IMusicProps {
  trackId: number;
  trackName: string;
  previewUrl: string;
}

interface ICardMusicProps {
  musica: IMusicProps;
}

function CardMusic(props: ICardMusicProps) {
  const { musica } = props;
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const storageData = JSON
      .parse(localStorage.getItem('favorite-musicas') || '[]');
    const isFavorite = storageData
      .some((x: { musica: IMusicProps }) =>
        (x.musica.trackId === musica.trackId));

    setFavorite(isFavorite);
  }, [musica.trackId]);

  function btnFav() {
    const storageKey = 'favorite-musicas';
    const storageData = JSON.parse(localStorage.getItem(storageKey) || '[]');

    const musicasFavoritas = storageData.map((item: { trackId: number }) =>
      item.trackId);

    if (favorite) {
      const index = musicasFavoritas.indexOf(musica.trackId);
      if (index > -1) {
        storageData.splice(index, 1);
        localStorage.setItem(storageKey, JSON.stringify(storageData));

      }
    } else {
      storageData.push({ trackId: musica.trackId, musica: props.musica });
      localStorage.setItem(storageKey, JSON.stringify(storageData));
    }
    setFavorite(!favorite);
  }

  return (
    <main className="m-auto flex h-32 my-3">
      <div className='flex flex-col justify-evenly'>
        <p>Musica: {musica.trackName}</p>
        <div className='flex justify-center'>
          <audio className='w-52 h-10' src={musica.previewUrl} controls>
            <track kind="captions" />
              O seu navegador não suporta o elemento
            <code>audio</code>
              .
          </audio>
          <button className='ml-3'
            type="button" onClick={() => btnFav()}>
            <img src={favorite ? purpleHeart : blackHeart}></img> 
          </button> 
        </div>
      </div>

    </main>
  );
}


export default CardMusic;
