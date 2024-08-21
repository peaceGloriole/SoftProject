import { useNavigate } from "react-router-dom";
import { useCreateAlbum } from "../../hooks/useGames";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";

const initialValues = {
    name: '',
    imgUrl: '',
    price: '',
    releaseDate: '',
    artist: '',
    genre: '',
    description: ''
};

export default function AlbumCreate() {
    const [error, setError] = useState('');

    const createAlbum = useCreateAlbum();
    const navigate = useNavigate();

    const createAlbumHandler = async (data) => {
        try {
            const { _id } = await createAlbum(data);

            navigate(`/albums/${_id}/details`);
        } catch (error) {
            setError(error.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, createAlbumHandler);

    return (
        <section className="createPage">
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Add Album</legend>

                    <div className="container">
                        <label htmlFor="name" className="vhide">Album name</label>
                        <input id="name" name="name" value={values.name} onChange={changeHandler} className="name" type="text" placeholder="Album name" />

                        <label htmlFor="imgUrl" className="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" value={values.imgUrl} onChange={changeHandler} className="imgUrl" type="text" placeholder="Image Url" />

                        <label htmlFor="price" className="vhide">Price</label>
                        <input id="price" name="price" value={values.price} onChange={changeHandler} className="price" type="text" placeholder="Price" />

                        <label htmlFor="releaseDate" className="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" value={values.releaseDate} onChange={changeHandler} className="releaseDate" type="text" placeholder="Release date" />

                        <label htmlFor="artist" className="vhide">Artist</label>
                        <input id="artist" name="artist" value={values.artist} onChange={changeHandler} className="artist" type="text" placeholder="Artist" />

                        <label htmlFor="genre" className="vhide">Genre</label>
                        <input id="genre" name="genre" value={values.genre} onChange={changeHandler} className="genre" type="text" placeholder="Genre" />

                        <label htmlFor="description" className="vhide">Description</label>
                        <textarea name="description" value={values.description} onChange={changeHandler} className="description" placeholder="Description"></textarea>

                        <button className="add-album" onSubmit={createAlbumHandler}>Add New Album</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}