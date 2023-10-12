import React, {Suspense} from 'react';
import {Await, defer, useLoaderData} from "react-router-dom";
import { loadVideoById } from "../actions/actions.js";
import FilmCardModal from "./FilmCardModal.jsx";

const VideoModal = () => {

    const dataInLoading = useLoaderData()


    return (
        <div>
            <Suspense fallback={<><p>Loading...</p></>}>
                <Await resolve={dataInLoading.video}>
                    {
                        (film) => {
                            return <FilmCardModal video={film.video} title={film.title}/>
                        }
                    }
                </Await>
            </Suspense>
        </div>
    );
};

export const loadDataById = async ({params}) => {
    //récupération des données
    const videoPromise = loadVideoById(params.id)

    return defer( {video : videoPromise} )
}


export default VideoModal;