import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import musicAPI from "../../../api/musicApi";
import { useParams } from 'react-router-dom';

export default function AlbumDetails() {

    const [album, setAlbum] = useState({});

    const { albumId } = useParams();

    useEffect(() => {
        (async () => {
            const albumDetail = await musicAPI.getOne(albumId);
            
            setAlbum(albumDetail);
        })();
    }, [albumId]);

    return (
        <section id="detailsPage">
            <div className="wrapper">
                <div className="albumCover">
                    <img src={album.imgUrl} />
                </div>
                <div className="albumInfo">
                    <div className="albumText">

                        <h1>Name: {album.name}</h1>
                        <h3>Artist: {album.artist}</h3>
                        <h4>Genre: {album.genre}</h4>
                        <h4>Price: ${album.price}</h4>
                        <h4>Date: {album.releaseDate}</h4>
                        <p>Description: {album.description}</p>
                    </div>

                    <div className="actionBtn">
                        <Link to="/album/edit" className="edit">Edit</Link>
                        <Link to="/album/delete" className="remove">Delete</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}