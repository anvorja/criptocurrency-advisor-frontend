import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";
import axios from "axios";

function NewsCard() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para obtener los datos de la URL
    const fetchData = async () => {
      setLoading(true);
      try {
        // Realiza la solicitud HTTP utilizando axios
        const { data } = await axios.get("http://127.0.0.1:8000/ver-noticias");

        // Actualiza el estado 'news' con los datos obtenidos
        setNews(data.results);
        console.log("mis resultados :u  :", data.results);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };

    // Llama a la función fetchData cuando el componente se monta
    fetchData();

    // No olvides limpiar el efecto si es necesario (opcional)
    return () => {
      // Código de limpieza si es necesario
    };
  }, []);

  return (
    <Box>
      {loading ? (
        <div className="productsContainer">
          <div style={{ textAlign: "center" }}>
            <CircularProgress style={{ margin: "100px" }} />
            <p>Cargando noticias...</p>
          </div>
        </div>
      ) : !news ? (
        <div>
          <p>No hay noticias.</p>
        </div>
      ) : (
        <p>{JSON.stringify(news)}</p>
      )}
    </Box>
  );
}

export default NewsCard;
