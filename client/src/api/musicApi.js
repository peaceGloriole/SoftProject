import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/albums';

export const getAll = async () => {
  const result = await request.get(BASE_URL);

  const albums = Object.values(result);

  return albums;
};

export const getOne = (albumsId) => request.get(`${BASE_URL}/${albumsId}`);