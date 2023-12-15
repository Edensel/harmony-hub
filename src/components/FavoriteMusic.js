import React from "react";
import { useEffect, useState } from "react";


function LikedMusic() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="py-5 text-center"> You don't have any liked Music yet!</h3>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-danger text-center py-3">Your Liked Music<i className="bi bi-heart-fill text-danger"></i>
                </h1>
                <div></div>
            </div>
        </div>
    ) 
};
export default LikedMusic;