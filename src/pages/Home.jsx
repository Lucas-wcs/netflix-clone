import React, {Suspense, useState} from 'react';
import {Await, defer, useLoaderData} from "react-router-dom";
import VideoCard from "../components/VideoCard.jsx";
import {loadVideos} from "../actions/actions.js";

const Home = () => {

    const dataInLoading = useLoaderData()

    const [inputSearch, setInputSearch] = useState("")


    return (
        <>
            <input type={"text"} onInput={(event) => {setInputSearch(event.target.value)}}/>

            <div className="home">

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

                                return (
                                    <>
                                        {films.filter((film) => {

                                            if(film.title.toLowerCase().includes(inputSearch.toLowerCase())) {
                                                return true
                                            } else {
                                                return false
                                            }
                                        }).map( (film) => {
                                            return <VideoCard key={film.id} miniature={film.miniature} id={film.id} type={film.type} image={film.image} title={film.title}/>
                                        })}
                                    </>

                                )
                            }
                        }
                    </Await>
                </Suspense>
            </div>
        </>

    );
};


export const loadDatas = async () => {
    //récupération des données
    const videoPromise = loadVideos()

    return defer( {video : videoPromise} )
}

export default Home;