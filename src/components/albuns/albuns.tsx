import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface AlbumsProps {
  albuns: {
    collectionId: number;
    artworkUrl100: string;
    collectionName: string;
    artistName: string;
  }[];
  artistSearch: string;
}

function Albums(props: AlbumsProps) {
  const { albuns, artistSearch } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if(albuns.length === 0 ) {
      setIsLoading(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <main className="flex flex-col m-auto h-[25em] overflow-y-scroll">
      <p className='pt-5'>Pesquisa sobre o artista
        <span className='text-orange-500 ml-1'> 
          {artistSearch.toUpperCase()}</span></p>
      <div className='mt-5'>

        {
          isLoading ? <p>Carregando...</p> :
            albuns.map((album) => (
              <Link key={album.collectionId}
                to={ `/album/${album.collectionId}`}
                className="flex text-sm my-5 ">
                <img className='rounded-xl' src={album.artworkUrl100} />
                <div className='ml-2 leading-relaxed'>

                  <p className='flex text-sm'
                  >Album name: {album.collectionName}</p>
                  <p className='flex text-sm'>Artista: {album.artistName}</p>
                </div>
              </Link>
            ))
        }
      </div>
    </main>
  );
}


export default Albums;
