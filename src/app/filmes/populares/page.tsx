import { getPopular } from "@/src/lib/api/tmdb";
import Title from "../../Components/Title"
import Grid from "../../Components/Grid";

export const rivalidate =60;
const Populares=async()=>{
    const populares =await getPopular();
    return(
        <div>
            <Title titulo="Filmes Populares"></Title>
            <Grid filmes={populares}></Grid>
        </div>
    )
}

export default Populares;