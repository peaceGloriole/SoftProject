import { useNavigate, useParams } from "react-router-dom";

import { updateAlbum } from "../../api/musicApi";

import { useForm } from "../../hooks/useForm";
import { useGetOneAlbum } from "../../hooks/useGames";

export default function AlbumEdit() {
    const navigate = useNavigate();
    const { albumId } = useParams();
    const [album] = useGetOneAlbum(albumId);

    const { values, changeHandler, submitHandler } = useForm(album, async (values) => {
        await updateAlbum(albumId, values);

        navigate(`/albums/${albumId}/details`);
    });

    return (
        <section className="editPage">
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Edit Album</legend>

                    <div className="container">
                        <label for="name" className="vhide">Album name</label>
                        <input id="name" name="name" value={values.name} onChange={changeHandler} className="name" type="text" />

                        <label for="imgUrl" className="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" value={values.imgUrl} onChange={changeHandler} className="imgUrl" type="text" />

                        <label for="price" className="vhide">Price</label>
                        <input id="price" name="price" value={values.price} onChange={changeHandler} className="price" type="text" />

                        <label for="releaseDate" className="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" value={values.releaseDate} onChange={changeHandler} className="releaseDate" type="text" />

                        <label for="artist" className="vhide">Artist</label>
                        <input id="artist" name="artist" value={values.artist} onChange={changeHandler} className="artist" type="text" />

                        <label for="genre" className="vhide">Genre</label>
                        <input id="genre" name="genre" value={values.genre} onChange={changeHandler} className="genre" type="text" />

                        <label for="description" className="vhide">Description</label>
                        <textarea name="description" value={values.description} onChange={changeHandler} className="description" rows="10"
                            cols="10"></textarea>

                        <button className="edit-album" type="submit">Edit Album</button>

                    </div>
                </fieldset>
            </form>
        </section>
    );
}