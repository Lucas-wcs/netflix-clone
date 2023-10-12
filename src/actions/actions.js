async function loadVideos() {
    const results = await fetch("http://demo1664740.mockable.io/video")

    const videos = await results.json()

    return videos
}

export default loadVideos
