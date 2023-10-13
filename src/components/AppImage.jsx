import React, {useEffect, useState} from 'react';

const AppImage = ({preview, final, alt, imageClass = ""}) => {

    const [currentUrl, setCurrentUrl] = useState(preview)
    const [loading, setLoading] = useState(true)

    const fetchImage = (image) => {
        const loadingImg = new Image()
        loadingImg.src = image
        loadingImg.onload = () => {
            setCurrentUrl(loadingImg.src)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchImage(final)
    }, [final])

    return (
        <div style={{
            filter: loading ? "blur(10px)" : "",
            transition: "0.6s filter linear",
            width: "100%",
            background: `url("${currentUrl}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            animationDuration: `${Math.random()*(30 - 15) + 15}s`
        }}
        className={imageClass}
        >
            <div className={"background-linear"}></div>
        </div>
    );
};

export default AppImage;