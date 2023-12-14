import React from "react";

function CreatePlaylist() {
    const [playlistName, setPlaylistName] = useState("");

    const create = () => {
    let currentPlaylist = localStorage.getItem("allPlaylist");
   
    currentPlaylist = JSON.parse(currentPlaylist);
    currentPlaylist[playlistName] = []; 
    localStorage.setItem("allPlaylist", currentPlaylist.toString());

    };
}