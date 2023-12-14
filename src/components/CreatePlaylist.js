import React, { useState } from "react";

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
    <div className="modal-body"></div>
        <input
          type="text"
          placeholder="Enter Name"
          className="form-control"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
    </div>
    <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button onClick={create} type="button" className="btn btn-primary">
            Create
          </button>
        </div>

    );
}

export default CreatePlaylist;