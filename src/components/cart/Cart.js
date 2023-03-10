import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import OrderSummaryItem from "./OrderSummaryItem";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

export default function Cart() {
  const store = useSelector((state) => state.cart);
  return (
    <>
      <CssBaseline />
      <Container fixed sx={{ p: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={7} lg={7}>
            <Grid container>
              <Grid item xs>
                {store.items?.length > 0 &&
                  store.items.map((item) => (
                    <CartItem item={item} key={item.title} />
                  ))}

                {store.items?.length === 0 && <p>Your Cart is empty.</p>}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5}>
            <OrderSummaryItem data={store} totalAmount={store.totalAmount} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
