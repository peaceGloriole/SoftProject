import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { deleteAlbum, getOne } from "../../../api/musicApi";

import { useAuthContext } from "../../../contexts/AuthContext";

export default function AlbumDetails() {
    const navigate = useNavigate();
    const { userId } = useAuthContext();
    const { albumId } = useParams();
    const [album, setAlbum] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            const albumDetail = await getOne(albumId);

            setAlbum(albumDetail);
        })();
    }, [albumId]);

    const isOwner = album._ownerId === userId;

    const albumDeleteHandler = async () => {
        try {
            await deleteAlbum(albumId)
            navigate('/albums');
        } catch (error) {
            setError(error.message);
        }
    };

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
                    {isOwner && (
                        <div className="actionBtn">
                            <Link to="/albums/:albumId/edit" className="edit">Edit</Link>
                            <Link to="/albums" onClick={albumDeleteHandler} className="remove">Delete</Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}