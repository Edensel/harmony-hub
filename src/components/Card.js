import React, { useState, useEffect } from "react";

export default function Card() {
    const [likedMusic, setLikedMusic] = useState([]);

    const handleLike = () => {
        let likedMusic = localStorage.getItem("likedMusic");
        likedMusic = JSON.parse(likedMusic);
        let updatedLikedMusic = [];
        if (likedMusic.some((item) => item.id === element.id)) {
            updatedLikedMusic = likedMusic.filter((item) => item.id !== element.id);
            setlikedMusic(updatedLikedMusic);
            localStorage.setItem("likedMusic", JSON.stringify(updatedLikedMusic));
        } else {
            updatedLikedMusic = likedMusic;
            updatedLikedMusic.push(element);
            setlikedMusic(updatedLikedMusic);
            localStorage.setItem("likedMusic", JSON.stringify(updatedLikedMusic));
        }
    }

    useEffect(() => { 
        const localLikedMusic = JSON.parse(localStorage.getItem("likedMusic"));
        setLikedMusic(localLikedMusic);
    }, []);

    return (
        <div key={element.id} className="col-lg-3 col-md-6 py-2">
            <div className="card">   
                <div className="ratio ratio-1x1 bg-secondary bg-opacity-25">

                    <img
                        src={element.album.image[0].url}
                        className="card-img-top"
                        alt="..."
                    />

                </div>
                <div className="card-body">
                    <div className="card title d-flex justify-content-between">
                        {element.name}
                        <div className="add-options d-flex align-items-start">
                            {likedMusic.some((item) => item.id === element.id) ? (
                <button className="btn btn-outline-secondary">
                  <i
                    onClick={handleLike}
                    className="bi bi-heart-fill text-danger"
                  ></i>
                </button>
              ) : (
                <button className="btn btn-outline-secondary">
                  <i onClick={handleLike} className="bi bi-heart"></i>
                </button>
              )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}