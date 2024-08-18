import { useEffect, useState } from "react";

import AlbumListItem from "./albumListItem/AlbumListItem";
import { getAll } from "../../api/musicApi";


export default function Album() {
    const [album, setAlbum] = useState({});

    useEffect(() => {
        (async () => {
            const album = await getAll();

            setAlbum(album);
        })();
    }, []);

    return (
        <section id="catalogPage">
            <h1>All Albums</h1>

            {album.length > 0
                ? album.map(album => <AlbumListItem key={album._id} {...album} />)
                : <p>No Albums in Catalog!</p>
            }

        </section>
    );
}