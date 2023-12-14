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

    }, []);

    return (
        <div key={element.id} className="col-lg-3 col-md-6 py-2">
            <div>   
                <div>   
                    
                </div>
            </div>

        </div>
    );
}