import MusicPlayer from "../pages/Home/Music_Player/MusicPlayer";
import Home from "../pages/Home/home";
import Favourites from "../pages/HomeNext/Favourites";
import HomeN from "../pages/HomeNext/HomeN";
import Music from "../pages/HomeNext/Music";

import AlbumSong from "../pages/HomeNext/album_song";
import Login from "../pages/Login/Login";
import Signin from "../pages/SignIn/SignIn";

export const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/signup",
    component: Signin,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/home/new/:id",
    component: HomeN,
  },
  {
    path: "/new/:id",
    component: Music,
  },
  {
    path: "/new/favourite/:id",
    component: Favourites,
  },
];
