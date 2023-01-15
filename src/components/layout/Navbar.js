import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GridViewIcon from "@mui/icons-material/GridView";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";
import { authLogout } from "../../store/auth-action";

function Navbar({ loggedUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.cart);

  const TypographyC = ({ onclickE, title }) => (
    <Typography
      variant="h6"
      noWrap
      component="a"
      onClick={onclickE}
      sx={{
        mr: 4,
        ml: 2,
        display: { xs: "none", md: "flex" },
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      {title}
    </Typography>
  );

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {loggedUser ? (
              <>
                <GridViewIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                />
                <TypographyC
                  onclickE={() => navigate("/Dashboard")}
                  title={"Dashboard"}
                />

                <Badge badgeContent={store.totalQuantity} color="success">
                  <ShoppingCartIcon
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  />
                </Badge>

                <TypographyC
                  onclickE={() => navigate("/Cart")}
                  title={"Cart"}
                />

                <LogoutIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                />

                <TypographyC
                  onclickE={() => dispatch(authLogout())}
                  title={"Logout"}
                />
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    cursor: "pointer",
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
