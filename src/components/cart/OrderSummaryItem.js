import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

export default function OrderSummaryItem({ data, totalAmount }) {
  console.log(data);
  return (
    <Card elevation={15}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Shopping Cart
        </Typography>
        <Typography variant="div" component="h1">
          Order Summary
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>

        {data.items?.length > 0 &&
          data.items?.map((item) => (
            <Box>
              <Typography variant="div" component="h4">
                {item.title}
              </Typography>
              <p>Quantity: x{item.quantity}</p>
              <p>Total price: {item.totalPrice}</p>
            </Box>
          ))}

        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <Grid container>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Total
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              {totalAmount}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <Button size="large" color="secondary" variant="contained">
          BUY NOW
        </Button>
      </CardActions>
    </Card>
  );
}
