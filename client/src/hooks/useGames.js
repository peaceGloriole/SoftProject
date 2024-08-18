import { useEffect, useState } from "react";
import { getAll, getOne } from "../api/musicApi";

export function getAllAlbums() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getAll();

            setAlbums(response);
        })();
    }, []); // This empty array is important, it tells React to run this effect only once

    return [albums, setAlbums];
};

export function getAlbumById(albumId) {
    const [album, setAlbum] = useState({});

    useEffect(() => {
        (async () => {
            const response = await getOne(albumId);

            setAlbum(response);
        })();
    }, [albumId]); // This array contains the dependencies of the effect

    return [album, setAlbum];
};