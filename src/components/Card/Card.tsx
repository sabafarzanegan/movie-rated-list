import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { DisplayType } from "../../pages/home/Home";
interface DATA {
  id: number;
  name?: String;
  title?: String;
  overview: String;
  poster_path?: string;
  vote_average?: Number;
}

interface props {
  data: DATA[];
  displaytype: DisplayType;
}

export default function MainCard(props: props) {
  const { data, displaytype } = props;
  return (
    <>
      <h1>movies</h1>
      <section style={{ padding: "30px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}>
          {data.map((item) => (
            <Card key={item.id} style={{ width: "400px", height: "400px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {displaytype === DisplayType.Movies
                      ? item.title
                      : item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ WebkitLineClamp: 3 }}>
                    {item.overview}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
