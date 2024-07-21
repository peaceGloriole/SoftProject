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

            {/* <div className="card-box">
                <img src="./images/pinkFloyd.jpg" />
                    <div>
                        <div className="text-center">
                            <p className="name">Name: The Dark Side of the Moon</p>
                            <p className="artist">Artist: Pink Floyd</p>
                            <p className="genre">Genre: Rock Music</p>
                            <p className="price">Price: $28.75</p>
                            <p className="date">Release Date: March 1, 1973</p>
                        </div>
                        <div className="btn-group">
                            <Link to="#" id="details">Details</Link>
                        </div>
                    </div>
            </div>

            <div className="card-box">
                <img src="./images/Lorde.jpg" />
                    <div>
                        <div className="text-center">
                            <p className="name">Name: Melodrama</p>
                            <p className="artist">Artist: Lorde</p>
                            <p className="genre">Genre: Pop Music</p>
                            <p className="price">Price: $7.33</p>
                            <p className="date">Release Date: June 16, 2017</p>
                        </div>
                        <div className="btn-group">
                            <Link to={`/albums/`} id="details">Details</Link>
                        </div>
                    </div>
            </div> */}


        </section>
    );
}