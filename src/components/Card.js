import React, { useState } from "react";

export default function Card() {
    const [likedMusic, setLikedMusic] = useState([]);

    const handleLike = () => {
        let likedMusic = localStorage.getItem("likedMusic");
        likedMusic = JSON.parse(likedMusic);
        let updatedLikedMusic = [];
    }

    return (
        <div>

        </div>
    );
}