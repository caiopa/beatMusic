
 
const BASIC_URL = 'https://itunes.apple.com';

export const fetchAlbunsAPI = async (term: string, entity = 'album')  => {
  const URL = `${BASIC_URL}/search?term=${term}&entity=${entity}`;
  const response = await fetch(URL);
  const res = response.json();
  return res;
};


export const getMusics = async (id: string, entity = 'song') => {
  const URL = `${BASIC_URL}/lookup?id=${id}&entity=${entity}`;
  const req = await fetch(URL);
  const requestJson = await req.json();
  return requestJson.results;
};
