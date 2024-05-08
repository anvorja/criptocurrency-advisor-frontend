import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function Criptos() {
  const [paperVisible, setPaperVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mydata, setMydata] = useState([]);

  const togglePaperVisibility = () => {
    setPaperVisible(!paperVisible);
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:8000/ver-cryptos");
      setMydata(data);
      console.log("--------------------------------", data);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Button
        color="inherit"
        variant="contained"
        sx={{
          margin: "10px 0 0 10px",
          color: "black",
          fontFamily: "Merienda",
        }}
        onClick={togglePaperVisibility}
      >
        Resumen
      </Button>
      {paperVisible && (
        <Paper elevation={3} style={{ margin: "20px", padding: "10px" }}>
          <p>Aquí va el texto del resumen</p>
        </Paper>
      )}
      <Paper elevation={3} style={{ margin: "20px", padding: "10px" }}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress />
          </Box>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Símbolo</TableCell>
                  <TableCell>Precio</TableCell>
                  <TableCell>Capitalización de mercado</TableCell>
                  <TableCell>Volumen (24h)</TableCell>
                  <TableCell>Cambio (1h)</TableCell>
                  <TableCell>Cambio (24h)</TableCell>
                  <TableCell>Cambio (7d)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mydata.map((crypto, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <img
                        src={crypto.icon}
                        alt={crypto.Nombre}
                        style={{ width: 32, height: 32 }}
                      />
                    </TableCell>
                    <TableCell>{crypto.Nombre}</TableCell>
                    <TableCell>{crypto["Símbolo"]}</TableCell>
                    <TableCell>{crypto.Precio}</TableCell>
                    <TableCell>{crypto["Capitalización de mercado"]}</TableCell>
                    <TableCell>{crypto["Volumen (24h)"]}</TableCell>
                    <TableCell
                      style={{
                        color: crypto["Cambio (1h)"] >= 0 ? "green" : "red",
                      }}
                    >
                      {crypto["Cambio (1h)"]}
                    </TableCell>
                    <TableCell
                      style={{
                        color: crypto["Cambio (24h)"] >= 0 ? "green" : "red",
                      }}
                    >
                      {crypto["Cambio (24h)"]}
                    </TableCell>
                    <TableCell
                      style={{
                        color: crypto["Cambio (7d)"] >= 0 ? "green" : "red",
                      }}
                    >
                      {crypto["Cambio (7d)"]}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Box>
  );
}

export default Criptos;
