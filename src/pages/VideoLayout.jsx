import React, {Suspense} from 'react';
import {Await, defer, Outlet, useLoaderData, useLocation, useParams} from "react-router-dom";
import VideoCard from "../components/VideoCard.jsx";
import {loadVideos} from "../actions/actions.js";

const VideoLayout = () => {

    const dataInLoading = useLoaderData()

    const location = useLocation()

    const params = useParams()


    return (
        <div className={"video-layout"}>
            <Suspense fallback={
                <>
                    <VideoCard skeleton={true}/>
                    <VideoCard skeleton={true}/>
                    <VideoCard skeleton={true}/>
                    <VideoCard skeleton={true}/>
                    <VideoCard skeleton={true}/>
                </>
            }>
                <Await resolve={dataInLoading.video}>
            {
                (films) => {
                    return films.filter((film) => {
                        if(location.pathname.includes("/movie") && film.type === 0) {
                            return true
                        } else if(location.pathname.includes("/serie") && film.type === 1){
                            return true
                        } else {
                            return false
                        }
                    }).map( (film) => {
                        return <VideoCard key={film.id} id={film.id} type={film.type} image={film.image} title={film.title}/>
                    })
                }

            }
                </Await>
            </Suspense>

            {
                params.id &&
                <div className={"container-flou"}>
                    <div className={"modal-container"}>
                        <div className={"video-modal-container"}>
                            <Outlet/>
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};

export const loadDatas = async () => {
    //récupération des données
    const videoPromise = loadVideos()

    return defer( {video : videoPromise} )
}

export default VideoLayout;