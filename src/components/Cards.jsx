import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Cards.css";

const Cards = ({ title, items, loading }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 style={{ marginTop: "100px", paddingLeft: "15px" }}>{title}</h2>
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
        <div className="card-row">
          {items.map((item, key) => (
            <div
              className="cardRow--item"
              key={key}
              onClick={() => navigate(`/more-infos/${item.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.original_title}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
