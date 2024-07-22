import { useQuery } from "@tanstack/react-query";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { fetchMovies, fetchTv } from "./query";
import MainCard from "../../components/Card/Card";
import { useState } from "react";
export enum DisplayType {
  Movies = "movies",
  TVshows = "tvshows",
}
const Home = () => {
  const [dispalyType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );
  const { data: MovieData, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  const { data: TvData, isLoading: isLoadingTv } = useQuery({
    queryKey: ["TV"],
    queryFn: fetchTv,
  });
  if (isLoadingMovies || isLoadingTv) {
    return <h1 style={{ marginTop: "30px", margin: "0 auto" }}>Loading...</h1>;
  }
  return (
    <>
      <ButtonGroup
        variant="outlined"
        aria-label="Basic button group"
        color="secondary"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}>
        <Button
          style={{
            background: `${
              dispalyType === DisplayType.Movies ? "#9c27b0" : "transparent"
            }`,
            color: `${dispalyType === DisplayType.Movies ? "#fff" : "black"}`,
          }}
          onClick={() => setDisplayType(DisplayType.Movies)}>
          Movies
        </Button>
        <Button
          style={{
            background: `${
              dispalyType === DisplayType.TVshows ? "#9c27b0" : "transparent"
            }`,
            color: `${dispalyType === DisplayType.TVshows ? "#fff" : "black"}`,
          }}
          onClick={() => setDisplayType(DisplayType.TVshows)}>
          TV
        </Button>
      </ButtonGroup>

      <section>
        {dispalyType === DisplayType.Movies ? (
          <MainCard data={MovieData.results} displaytype={DisplayType.Movies} />
        ) : (
          <MainCard data={TvData.results} displaytype={DisplayType.TVshows} />
        )}
      </section>
    </>
  );
};

export default Home;
