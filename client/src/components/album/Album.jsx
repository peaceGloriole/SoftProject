import { Link } from "react-router-dom";

export default function Album() {
    return (
        <section id="catalogPage">
            <h1>All Albums</h1>

            <div className="card-box">
                <img src="./images/BrandiCarlile.png" />
                    <div>
                        <div className="text-center">
                            <p className="name">Name: In These Silent Days</p>
                            <p className="artist">Artist: Brandi Carlile</p>
                            <p className="genre">Genre: Low Country Sound Music</p>
                            <p className="price">Price: $12.80</p>
                            <p className="date">Release Date: October 1, 2021</p>
                        </div>
                        <div className="btn-group">
                            <a href="#" id="details">Details</a>
                        </div>
                    </div>
            </div>

            <div className="card-box">
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
            </div>

            <p>No Albums in Catalog!</p>

        </section>
    );
}