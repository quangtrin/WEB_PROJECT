import axios from "axios";
import film from "./FILE_URL/film.json"

const InsertData = () => {
    for (let i = 11; i <= 20; i++) {
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
export default InsertData;