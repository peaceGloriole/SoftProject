import AlbumListItem from "./albumListItem/AlbumListItem";

import { useGetAllAlbums } from "../../hooks/useGames";

export default function Album() {
    const [album, setAlbum] = useGetAllAlbums();

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