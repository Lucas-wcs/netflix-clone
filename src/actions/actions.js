export const loadVideos = async () => {
    const results = await fetch(import.meta.env.VITE_BACKEND_URL+"/video")

    const videos = await results.json()

    return videos
}

export const loadVideoById = async (id) => {
    const results = await fetch(import.meta.env.VITE_BACKEND_URL+"/video/"+id)

    const video = await results.json()

    return video
}
