import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details";
import Header from "../components/Header";

const MoreInfos = () => {
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchMoviesData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=343c0cc8f2eba1f7ced8409cc651090f&language=pt-BR`
      );

      setInfos(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoviesData();
  }, [id]);

  return (
    <div>
      <Header black={false} />
      <Details items={infos} loading={loading} />
    </div>
  );
};

export default MoreInfos;
