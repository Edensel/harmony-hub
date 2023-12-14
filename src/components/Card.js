import React, { useState } from "react";

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

    return (
        <div>

        </div>
    );
}