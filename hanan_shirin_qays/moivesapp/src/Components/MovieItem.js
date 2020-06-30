import React from "react";
import Card, { CardBody } from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";

export default function MovieItem(props) {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const nullPhoto =
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";

  return (
    <a href={`Movie/${props.movie.id}`}>
    <Card
      key={props.movie.id}
      style={{ width: "50%" }}
      // onClick={() => props.setMovieId(props.movie.id)}
    >
      <div className="card image">
        <Card.Img
          src={
            props.movie.backdrop_path !== null
              ? baseUrl + props.movie.backdrop_path
              : nullPhoto
          }
        />
        <React.Fragment>
          <h6 className="center datails">
            {props.movie.title}
            <br />
            <span>
              Vote Average:{" "}
              <ReactStars
                count={10}
                value={props.movie.vote_average}
                size={14}
                color2={"#ffd700"}
              />{" "}
              ({props.movie.vote_average})
            </span>
          </h6>
        </React.Fragment>
        <div className="details">
          <div className="center">
            <p>
              Released <br />
              {props.movie.release_date}
            </p>
          </div>
        </div>
      </div>
    </Card>
    </a>
  );
}