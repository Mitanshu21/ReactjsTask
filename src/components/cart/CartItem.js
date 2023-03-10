import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function CartItem({ item }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {item.category}
        </Typography>
        <Typography variant="div" component="h2">
          {item.title}
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <Grid container>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Quantity
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              x{item.quantity}
            </Typography>
          </Grid>
          <Grid item xs={10} sm={9} md={10} lg={10}>
            <Typography
              variant="body1"
              component="div"
              style={{ fontWeight: "bold" }}
            >
              Price
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={1}>
            <Typography variant="h6" component="div" color="secondary">
              {item.price}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
