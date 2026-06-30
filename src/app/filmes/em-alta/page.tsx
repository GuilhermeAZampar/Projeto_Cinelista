import { getNowPlaying, getPopular } from "@/src/lib/api/tmdb";
import Title from "../../Components/Title"
import Grid from "../../Components/Grid";

export const dynamic = `force-dynamic`;
const Emalta=async()=>{
    const populares =await getNowPlaying();
    return(
        <div>
            <Title titulo="Filmes em Alta"></Title>
            <Grid filmes={populares}></Grid>
        </div>
    )
}

export default Emalta;