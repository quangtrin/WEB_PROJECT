import axios from "axios"
import episodeFilm from "./FILE_URL/episodeFilm.json"
const EpisodeData = () => {
    // Insert episodeFilm data
    for (let j = 0; j <= episodeFilm.length-1; j++) {
        axios.post("/api/admin/addEpisode", {
            filmID: episodeFilm[j].filmID,
            episodeID: episodeFilm[j].episodeID,
            url: episodeFilm[j].Url,
        })
    }
}
export default EpisodeData;