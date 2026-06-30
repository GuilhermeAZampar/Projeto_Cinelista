import { getTop } from "@/src/lib/api/tmdb";
import Title from "../../Components/Title"
import Grid from "../../Components/Grid";

export const dynamic = `force-static`;
const TopFilmes=async ()=>{
    const filmes = await getTop();
    return(
        <div>
            <Title titulo="Top Filmes"></Title>
            <Grid filmes={filmes}></Grid>
        </div>
    )
}

export default TopFilmes;