import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function NewCard(mynew) {
  return (
    <CardActionArea>
      <CardContent>
        <Typography
          sx={{ fontSize: 12, height: "24px", alignItems: "center" }}
          color="text.secondary"
        >
          {mynew.title}
        </Typography>
        <Typography
          sx={{ fontSize: 12, height: "24px", alignItems: "center" }}
          color="text.secondary"
        >
          {mynew.date}
        </Typography>
      </CardContent>
    </CardActionArea>
  );
}

export default NewCard;
