import React from "react";
import { products } from "../../products";
import ProductItem from "./ProductItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const store = useSelector((state) => state.cart.items);

  return (
    <>
      <Box sx={{ width: "100%", p: 10 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
          {products.map((item) => (
            <React.Fragment key={item.title}>
              <Grid item>
                <ProductItem item={item} store={store} />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
