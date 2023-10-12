import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Root from "./components/Root.jsx";
import Home, {loadDatas} from "./pages/Home.jsx";
import VideoLayout from "./pages/VideoLayout.jsx";
import VideoModal from "./components/VideoModal.jsx";


const App = () => {
    //logique

    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <Root/>,
                children: [
                    {
                        index: true,
                        element: <Home/>,
                        loader: loadDatas
                    },
                    {
                        path: "movie",
                        element: <VideoLayout/>,
                        loader: loadDatas,
                        children: [
                            {
                                path: ":id",
                                element: <VideoModal/>,
                                loader: loadDatas
                            }
                        ]
                    },
                    {
                        path: "serie",
                        element: <VideoLayout/>,
                        loader: loadDatas,
                        children: [
                            {
                                path: ":id",
                                element: <VideoModal/>,
                                loader: loadDatas
                            }
                        ]
                    }
                ]
            }
        ]

    )



    //visuel
    return (
        <RouterProvider router={router}/>
    );
};

export default App;