import Image from "next/image";
import Title from "./Components/Title";
import Grid from "./Components/Grid";
import { getMoviesTranding } from "../lib/api/tmdb";

export default async function Home() {
  const filmes= await getMoviesTranding();
  return (
    <>
    <Title titulo="Filmes em Destaque"></Title>
    <Grid filmes={filmes}/>
    </>
  );
}
