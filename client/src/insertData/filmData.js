import axios from "axios";
import film from "./FILE_URL/film.json"
import episodeFilm from "./FILE_URL/episodeFilm.json"


const FilmData = () => {
    for (let i = 0; i <= film.length - 1; i++) {    // Insert film data 
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
}
export default FilmData;