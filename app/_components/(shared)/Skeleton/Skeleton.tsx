import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const MediaCardSkeleton: React.FC = () => {
  return (
    <Card>
      <Skeleton variant="rectangular" height={140} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Skeleton width="60%" />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Skeleton />
          <Skeleton width="80%" />
        </Typography>
      </CardContent>
      <CardActions>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Skeleton variant="rectangular" width="45%" height={36} />
          <Skeleton variant="rectangular" width="45%" height={36} />
        </Box>
      </CardActions>
    </Card>
  );
};

export default MediaCardSkeleton;
