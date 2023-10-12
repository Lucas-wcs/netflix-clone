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
        <img src={currentUrl} alt={alt} style={{
            filter: loading ? "blur(10px)" : "",
            transition: "0.6s filter linear",
            width: "100%",
            background: "transparent",
        }}
        className={imageClass}
        />
    );
};

export default AppImage;