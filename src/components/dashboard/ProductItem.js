import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

export default function ProductItem({ item, store }) {
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(cartActions.addItemToCart(item));
  };

  const removeItemHandler = (item) => {
    dispatch(cartActions.removeItemFromCart(item));
  };

  let alreadyInCart = store.filter((t) => t.title === item.title);

  return (
    <Card sx={{ width: 345, height: 550, p: 3 }}>
      <CardMedia sx={{ height: 345 }} image={item.image} title={item.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="center" alignItems="center">
          {alreadyInCart?.length > 0 ? (
            <>
              <Button
                variant="outlined"
                onClick={() => removeItemHandler(item.id)}
              >
                -
              </Button>
              <Button variant="text">{alreadyInCart[0].quantity}</Button>
              <Button variant="outlined" onClick={() => addItemHandler(item)}>
                +
              </Button>
            </>
          ) : (
            <Button variant="outlined" onClick={() => addItemHandler(item)}>
              Add to Cart
            </Button>
          )}
        </Box>
      </CardActions>
    </Card>
  );
}
