/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function AlbumListItem({
    name,
    artist,
    genre,
    price,
    releaseDate,
    imgUrl,
    _id,
}) {
    return (
        <div className="card-box">
            <img src={imgUrl} />
            <div>
                <div className="text-center">
                    <p className="name">Name: {name}</p>
                    <p className="artist">Artist: {artist}</p>
                    <p className="genre">Genre: {genre}</p>
                    <p className="price">Price: ${price}</p>
                    <p className="date">Release Date: {releaseDate}</p>
                </div>
                <div className="btn-group">
                    <Link to={`/albums/${_id}/details`} id="details">Details</Link>
                </div>
            </div>
        </div>
    );
}