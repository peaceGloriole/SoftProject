import { useEffect, useState } from "react";
import { createAlbum, getAll, getOne } from "../api/musicApi";

export function useGetAllAlbums() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getAll();

            setAlbums(response);
        })();
    }, []); // This empty array is important, it tells React to run this effect only once

    return [albums, setAlbums];
};

export function useGetOneAlbum(albumId) {
    const [album, setAlbum] = useState({
        name: ``,
        imgUrl: ``,
        price: ``,
        releaseDate: ``,
        artist: ``,
        genre: ``,
        description: ``, // This is the initial state of the album
    });

    useEffect(() => {
        (async () => {
            const response = await getOne(albumId);

            setAlbum(response);
        })();
    }, [albumId]); // This array contains the dependencies of the effect

    return [album, setAlbum];
};

export function useCreateAlbum() {
    const albumCreateHandler = (data) => createAlbum(data);

    return albumCreateHandler;
};