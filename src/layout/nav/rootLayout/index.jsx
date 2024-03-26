import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Outlet, useLocation } from "react-router-dom";
import MainLogo from "../../../../src/assets/beep.png";
import { UserMenuItems } from "../../../utils/constants/menuItems";
import { useNavigate } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
import { Avatar, Tooltip } from "@mui/material";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function RootLayout() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function handleNavMenu(path) {
    navigate(path);
  }

  const logoRoute = () => {
    navigate("/");
  };

  return (
    <div>
      <AppBar position="static" className="header">
        <Container maxWidth="xl">
          <Toolbar className="headerAlignment">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
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
              <img
                onClick={logoRoute}
                src={MainLogo}
                alt="Image"
                style={{ width: "100px", height: "100px" }}
              />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {UserMenuItems?.map((page, i) => {
                  let isActive = location?.pathname === page?.path;
              
                  return (
                    <MenuItem onClick={() => handleNavMenu(page.path)} key={i}>
                      <Typography
                        className="MenuHeader"
                        textAlign="center"
                        sx={{
                          color: isActive
                            ? "red !important"
                            : "black !important",
                        }}
                      >
                        {page?.name}
                      </Typography>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              // href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                src={MainLogo}
                alt="Image"
                style={{ width: "100px", height: "100px" }}
              />
            </Typography>
            <div>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {UserMenuItems?.map((page, i) => {
                  let isActive = location.pathname === page.path;

                  return (
                    <Button
                      className="MenuHeader"
                      key={page}
                      onClick={() => handleNavMenu(page.path)}
                      sx={{
                        my: 2,
                        color: isActive ? "red !important" : "black !important",
                        display: "block",
                      }}
                    >
                      {page?.name}
                    </Button>
                  );
                })}
              </Box>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default RootLayout;
