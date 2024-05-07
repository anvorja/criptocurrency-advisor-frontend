import { useState } from "react";
import Logo from "/icon.svg";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Grid,
  CardContent,
  Card,
  Dialog,
  DialogContent,
  TextField,
  Alert,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mytoolbar from "./components/menu";
import Getnews from "./components/Getnews";
import Criptos from "./components/Criptos";
function App() {
  return (
    <>
      <Router>
        <Mytoolbar />
        <Routes>
          <Route path="/" element={<Criptos />} />
          <Route path="/CriptoNoticias" element={<Getnews />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
