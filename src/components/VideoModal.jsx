import React, {Suspense} from 'react';
import {Await, defer, useLoaderData, useParams} from "react-router-dom";
import loadVideos from "../actions/actions.js";
import VideoCard from "./VideoCard.jsx";
import FilmCardModal from "./FilmCardModal.jsx";

const VideoModal = () => {

    const param = useParams()
    const dataInLoading = useLoaderData()


    return (
        <div>
            <Suspense fallback={<><p>Loading...</p></>}>
                <Await resolve={dataInLoading.video}>
                    {
                        (films) => {
                            const video = films.find((film) => {return film.id == param.id})
                            return <FilmCardModal video={video.video} title={video.title}/>
                        }
                    }
                </Await>
            </Suspense>
        </div>
    );
};

export const loadDatas = async () => {
    //récupération des données
    const videoPromise = loadVideos()

    return defer( {video : videoPromise} )
}


export default VideoModal;