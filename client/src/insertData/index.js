import axios from "axios";
import film from "./FILE_URL/film.json"
import episodeFilm from "./FILE_URL/episodeFilm.json"


const InsertData = () => {
    for (let i = 1; i <= film.length; i++) {    // Insert film data 
        axios.post("/api/admin/addFilm", {
            filmName: film[i].filmName,
            status: "0",
            point: "9.8",
            year: film[i].year,
            duration: film[i].duration,
            description: film[i].description,
            category: film[i].category,
            url: film[i].url,
        })
    }

    // Insert episodeFilm data
    for (let j = 1; j <= episodeFilm.length; j++) {
        axios.post("/api/admin/addEpisode", {
            filmID: episodeFilm[j].filmID,
            episodeID: episodeFilm[j].episodeID,
            url: episodeFilm[j].Url,
        })
    }

}
export default InsertData;