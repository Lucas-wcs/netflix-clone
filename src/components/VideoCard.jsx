import React from 'react';
import {Link} from "react-router-dom";

const VideoCard = ({ id, image, title, type, skeleton = false }) => {
    return (
        <div className={"video-card"}>
            {skeleton ?
                <div className={"skeleton"}>

                </div>

                :

                <div>
                    <Link to={type === 0 ? `/movie/${id}` : `/serie/${id}`} >
                        <img src={image} alt={title}/>
                    </Link>

                </div>

            }
        </div>
    );
};

export default VideoCard;