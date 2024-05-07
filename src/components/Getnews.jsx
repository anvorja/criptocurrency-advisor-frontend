import React, { useEffect, useState, useRef } from "react";
import { CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Box,
  Paper,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function Getnews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchDataCalled = useRef(false); // Variable de referencia para rastrear si fetchData ya se ha llamado

  const fetchData = async () => {
    if (!fetchDataCalled.current) {
      // Verifica si fetchData ya se ha llamado
      fetchDataCalled.current = true; // Marca que fetchData se ha llamado
      setLoading(true);
      try {
        // Realiza la solicitud HTTP utilizando axios
        const { data } = await axios.get("http://127.0.0.1:8000/ver-noticias");

        // Actualiza el estado 'news' con los datos obtenidos
        setNews(data);
        console.log("mis resultados :u  :", data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Este efecto se ejecutará solo una vez, después de que el componente se monte

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
        <Grid xs={12} sm={6} md={4} lg={3}>
          <motion.div
            initial="hidden"
            animate="visible"
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {news.map((mynew, index) => (
              <motion.div key={index} custom={index} animate="visible">
                <Paper
                  sx={{ width: "400px", margin: " 10px 10px 10px 10px" }}
                  elevation={2}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {mynew.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 12,
                          height: "24px",
                          alignItems: "center",
                        }}
                        color="text.secondary"
                      >
                        {new Date(mynew.date).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Paper>
              </motion.div>
            ))}
          </motion.div>
        </Grid>
      )}
      {/* <p>{JSON.stringify(news)}</p> */}
    </Box>
  );
}

export default Getnews;
