import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Car } from "@/types/type";

interface CardProps {
  car: Car;
}
const MediaCard: React.FC<CardProps> = ({ car }) => {
  return (
    <Card className="cursor-pointer">
      <CardMedia
        component="img"
        sx={{ flexGrow: 1, objectFit: "cover" }}
        image={car?.image}
        title={car?.model}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {car?.brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {car?.brand} Formula One Team is proud to unveil the {car?.model}, our
          latest Formula 1 car designed to dominate the 2024 season. The{" "}
          {car?.model} embodies our commitment to innovation, precision
          engineering, and competitive excellence. It will make its competitive
          debut in March {car?.year}, as the team competes in the Formula 1
          World Championship, running from March to December {car?.year}.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
