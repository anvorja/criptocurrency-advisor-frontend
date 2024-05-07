import React from "react";
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

function Mytoolbar() {
  return (
    <Box sx={{ maxWidth: "100%" }}>
      <header>
        <AppBar
          position="sticky"
          elevation={2}
          style={{
            backgroundColor: "#3A0F54",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              padding: "0px !important",
            }}
          >
            <Box display={"flex"} alignItems={"center"}>
              <Link to="/">
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <img
                    src={"public/icon.png"}
                    alt="My Icon"
                    style={{
                      width: "60px",
                      height: "60px",
                      marginLeft: "10px",
                    }}
                  />
                </IconButton>
              </Link>
              <Typography
                variant="h6"
                color="#fff"
                component="div"
                fontFamily="Merienda"
              >
                CRYPTOSCRAPER
              </Typography>
            </Box>
            <Box>
              <Button
                color="inherit"
                component={Link}
                to="/"
                variant="contained"
                sx={{
                  marginRight: "10px",
                  color: "black",
                  fontFamily: "Merienda",
                }}
              >
                Inicio
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/CriptoNoticias"
                variant="contained"
                sx={{
                  marginRight: "10px",
                  color: "black",
                  fontFamily: "Merienda",
                }}
              >
                CryptoNoticias
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </header>
    </Box>
  );
}

export default Mytoolbar;
