import React from "react";

function CreatePlaylist() {
    const [playlistName, setPlaylistName] = useState("");

    const create = () => {
    let currentPlaylist = localStorage.getItem("allPlaylist");
   
    currentPlaylist = JSON.parse(currentPlaylist);
    currentPlaylist[playlistName] = []; 
    localStorage.setItem("allPlaylist", currentPlaylist.toString());

    };

    return (
        <div className="modal-dialog"></div>
            {/* .... */}
        </div>
        
        <input
          type="text"
          placeholder="Enter Name"
          className="form-control"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
    );
}