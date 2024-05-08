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
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

function Getnews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialogIndex, setOpenDialogIndex] = useState(null);

  const fetchDataCalled = useRef(false);

  const fetchData = async () => {
    if (!fetchDataCalled.current) {
      fetchDataCalled.current = true;
      setLoading(true);
      try {
        const { data } = await axios.get("https://criptocurrency-advisor.onrender.com/ver-noticias");
        setNews(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
      setLoading(false);
    }
  };

  const handleDialogClose = () => {
    setOpenDialogIndex(null);
  };

  const handleDialogOpen = (index) => {
    setOpenDialogIndex(index);
  };

  useEffect(() => {
    fetchData();
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
        <Grid>
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
                  <CardActionArea onClick={() => handleDialogOpen(index)}>
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        fontFamily="fantasy"
                      >
                        {mynew.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 12,
                          height: "24px",
                          alignItems: "center",
                          fontFamily: "Merienda",
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
                  <Dialog
                    open={openDialogIndex === index}
                    onClose={handleDialogClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <br />
                        {mynew.summary}
                      </DialogContentText>
                      <DialogContentText
                        id="alert-dialog-description"
                        style={{ fontFamily: "Merienda", fontSize: "14px" }}
                      >
                        <br />
                        {mynew.authors[0]}
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        href={mynew.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver nota completa
                      </Button>
                      <Button onClick={handleDialogClose}>Cerrar</Button>
                    </DialogActions>
                  </Dialog>
                </Paper>
              </motion.div>
            ))}
          </motion.div>
        </Grid>
      )}
    </Box>
  );
}

export default Getnews;
