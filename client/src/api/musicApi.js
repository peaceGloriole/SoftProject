import * as requester from './requester';

const BASE_URL = 'http://localhost:3030/data/albums';

export const getAll = async () => {
  const result = await requester.get(BASE_URL);
  const albums = Object.values(result);

  return albums;
};

export const getOne = async (albumsId) => {
  const result = await requester.get(`${BASE_URL}/${albumsId}`);

  return result;
}
export const createAlbum = (data) => requester.post(BASE_URL, data);
export const deleteAlbum = (albumsId) => requester.del(`${BASE_URL}/${albumsId}`);
export const updateAlbum = (albumsId, data) => requester.put(`${BASE_URL}/${albumsId}`, data);