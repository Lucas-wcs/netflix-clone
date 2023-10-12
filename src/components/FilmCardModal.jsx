import React from 'react';
import {Link, useLocation} from "react-router-dom";

const FilmCardModal = ({title, video}) => {

    const location = useLocation()

    return (
        <div className={"film-card-modal"}>
            <div>
               <video src={video} autoPlay muted controls/>
            </div>
            <h2>{title}</h2>
            <Link to={location.pathname.includes("/movie") ? "/movie" : "/serie"}>
                X
            </Link>
        </div>
    );
};

export default FilmCardModal;