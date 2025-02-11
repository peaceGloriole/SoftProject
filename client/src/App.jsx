import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import AlbumCreate from "./components/albumCreate/AlbumCreate";
import Album from "./components/album/Album";
import Footer from "./components/footer/Footer";
import AlbumDetails from "./components/album/albumDetails/AlbumDetails";
import AlbumEdit from "./components/albumEdit/AlbumEdit";

import { AuthContextProvider } from "./contexts/AuthContext";

import ViewGuard from "./guards/ViewGuards";

function App() {

    return (
        <AuthContextProvider>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route element={<ViewGuard />}>
                            <Route path="/albums/create" element={<AlbumCreate />} />
                            <Route path="/albums/:albumId/edit" element={<AlbumEdit />} />
                        </Route>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/albums" element={<Album />} />
                        <Route path="/albums/:albumId/details" element={<AlbumDetails />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthContextProvider>
    );
}

export default App;
