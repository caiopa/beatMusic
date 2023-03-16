import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardMusic from '../../components/card/card';
import { getMusics } from '../../utils/getApi';

interface ITrack { 
  trackId: number;
  trackName: string;
  previewUrl: string;
} 
interface IAlbum {
  artworkUrl100: string ,
  collectionName:string ,
  artistName: string,
}


function Albums() {
  const [ musicas, setMusicas ] = useState<ITrack[]>([]);
  const [ album, setAlbum ] = useState<IAlbum >();
  const { id } = useParams();

  useEffect(() => {
    fetchMusic();
  }, []);
   
  const fetchMusic = async () => {
    const data = await getMusics(id as string);
    setMusicas(data.filter((songs: ITrack) => songs.trackId ));
    setAlbum(data[0]);

 
  };


  return (
    <main className="">
      <div className='flex justify-evenly my-5 m-auto'>

        <div className=''>
          <img src={ album?.artworkUrl100 } alt={ album?.collectionName } />
        </div>
        <div className='text-center flex flex-col justify-evenly'>
          <h1 className=''>Artista: <span className='ml-2'>
            { album?.collectionName }</span></h1>
          <p>Album:<span className='ml-2'>
            { album?.artistName }
          </span>
          </p>
        </div>
      </div>
   
   
      <div className='flex flex-col h-[500px] overflow-y-scroll'>
        {
          musicas.map((musica: ITrack) =>
            (<CardMusic key={musica.trackId} musica={musica}/>))
        }
      </div>
      
    </main>
  );
}


export default Albums;
