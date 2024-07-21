import { useEffect, useState } from "react";
import * as musicAPI from "../../api/musicApi";
import AlbumListItem from "./albumListItem/AlbumListItem";


export default function Album() {
    const [album, setAlbum] = useState({});

    useEffect(() => {
        (async () => {
            const album = await musicAPI.getAll();
 
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