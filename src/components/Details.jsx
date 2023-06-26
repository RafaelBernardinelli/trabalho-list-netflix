import { CircularProgress } from "@mui/material";
import "./Details.css";

const Details = ({ title, items, loading }) => {
  let firstDate = new Date(items.release_date);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress style={{ color: "red" }} />
        </div>
      ) : (
        <section
          className="details"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${items.backdrop_path}`,
          }}
        >
          <div className="details--vertical">
            <div className="details--horizontal">
              <div className="details--name">{items.original_title}</div>
              <div className="details--info">
                <div className="details--points">
                  {items.vote_average} pontos
                </div>
                <div className="details--year">{firstDate.getFullYear()}</div>
              </div>

              <div className="details--description">{items.overview}</div>
              <div className="buttons">
                <a className="watch--button" href={`/watch/${items.id}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="0.7em"
                    viewBox="0 0 384 512"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>{" "}
                  Assitir
                </a>
                <a className="mylist--button" href={`/list/add${items.id}`}>
                  + Minha lista
                </a>
              </div>
              <div className="details--genres">
                <strong>Gêneros: </strong>
                {items.genres &&
                  items.genres.map((genre) => genre.name).join(", ")}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Details;
