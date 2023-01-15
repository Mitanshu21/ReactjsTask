import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";
import { authLogout } from "../../store/auth-action";

function Navbar({ loggedUser }) {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.cart);

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {loggedUser ? (
              <>
                <Badge badgeContent={store.totalQuantity} color="success">
                  <ShoppingCartIcon
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  />
                </Badge>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/Cart"
                  sx={{
                    mr: 4,
                    ml: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Cart
                </Typography>

                <LogoutIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  onClick={() => dispatch(authLogout())}
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Logout
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Login
                </Typography>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
export default Navbar;
