import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import "./Home.css";

const Home = () => {
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchMoviesData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=343c0cc8f2eba1f7ced8409cc651090f&language=pt-BR&page=${page}`
      );

      setInfos(response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoviesData();
  }, [page]);

  const handleChangeMore = () => {
    setPage(page + 1);
  };

  const handleChangeLess = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleInputChange = (e) => {
    setPage(Number(e.target.value));
  };

  return (
    <div>
      <Header black={true} />
      <Cards items={infos} loading={loading} title="Recomendados para Você" />
      <div
        style={{
          display: "flex",
          height: "100px",
          color: "#FFFFFF",
          justifyContent: "center",
          marginBottom: "10px",
          alignItems: "center",
        }}
      >
        <div>
          <button
            className="button-pagination"
            onClick={() => handleChangeLess()}
          >
            <ArrowBackIosNewIcon
              fontSize="small"
              sx={{ paddingRight: "2px" }}
            />
          </button>
          <span>Anterior</span>
        </div>
        <div>
          <input
            style={{
              background: "none",
              width: "45px",
              height: "45px",
              border: "3px solid red",
              borderRadius: "10px",
              marginInline: "20px",
              display: "flex",
              textAlign: "center",
              fontSize: "20px",
              color: "#fff",
              outline: "none",
            }}
            value={page}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <span>Proximo</span>
          <button
            className="button-pagination"
            onClick={() => handleChangeMore()}
          >
            <ArrowForwardIosIcon fontSize="small" sx={{ paddingLeft: "2px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
