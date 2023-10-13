import React from 'react';
import {Link} from "react-router-dom";
import AppImage from "./AppImage.jsx";

const VideoCard = ({ id, image, miniature, title, type, skeleton = false }) => {
    return (
        <div className={"video-card"}>
            {skeleton ?
                <div className={"skeleton"}>

                </div>

                :

                <div>
                    <Link to={type === 0 ? `/movie/${id}` : `/serie/${id}`} >
                        <AppImage preview={miniature} final={image} alt={title} imageClass={"movie-bg"}/>
                    </Link>

                </div>

            }
        </div>
    );
};

export default VideoCard;