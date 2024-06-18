import { useState } from "react";
import {
  AppBar,
  Box,
  Stack,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Menu,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ITEMS_HEADER } from "../data/Commons";
import { COLOR_1, COLOR_2 } from "../assets/color";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { IMG_1 } from "../assets/img";
import MenuHeader from "./MenuHeader";

const Header = () => {
  const [anchorElFirst, setAnchorElFirst] = useState(null);
  const [currentMenuFirst, setCurrentMenuFirst] = useState(null);
  const [anchorElSecond, setAnchorElSecond] = useState(null);
  const [currentMenuSecond, setCurrentMenuSecond] = useState(null);

  const handleMouseEnterFirst = (event, menu) => {
    setAnchorElFirst(event.currentTarget);
    setCurrentMenuFirst(menu);
  };

  const handleMouseLeaveFirst = () => {
    setAnchorElFirst(null);
    setCurrentMenuFirst(null);
  };

  const handleMouseEnterSecond = (event, menu) => {
    setAnchorElSecond(event.currentTarget);
    setCurrentMenuSecond(menu);
  };

  const handleMouseLeaveSecond = () => {
    setAnchorElSecond(null);
    setCurrentMenuSecond(null);
  };

  return (
    <AppBar sx={{ bgcolor: "white" }} position="sticky">
      <Toolbar>
        <MenuHeader />
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/">
            <img src={IMG_1} height={90} width={100} alt="Logo" />
          </Link>
        </Box>
        <Stack
          direction="row"
          spacing={6}
          justifyContent="center"
          display={{ xs: "none", lg: "flex" }}
          flexGrow={1}
        >
          {ITEMS_HEADER.map((item) => (
            <Box
              key={item.title}
              onMouseEnter={(e) => handleMouseEnterFirst(e, item)}
              onMouseLeave={handleMouseLeaveFirst}
            >
              <Typography
                component={Link}
                to="/"
                sx={{
                  color: COLOR_2,
                  fontSize: 17,
                  display: "inline-flex",
                  textTransform: "none",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                {item.title}
                {item.icon}
              </Typography>
              <Menu
                anchorEl={anchorElFirst}
                open={currentMenuFirst === item}
                onClose={handleMouseLeaveFirst}
                elevation={0}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: 0,
                  },
                  "& .MuiBackdrop-root": {
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    top: "98px",
                  },
                }}
                MenuListProps={{
                  onMouseLeave: handleMouseLeaveFirst,
                }}
              >
                <List component="nav" disablePadding>
                  {item.items.map((menuItem, index) => (
                    <ListItem
                      key={index}
                      onClick={handleMouseLeaveFirst}
                      sx={{
                        "&:hover": {
                          backgroundColor: COLOR_1,
                        },
                      }}
                    >
                      <ListItemText primary={menuItem} />
                    </ListItem>
                  ))}
                </List>
              </Menu>
            </Box>
          ))}
        </Stack>
        <Stack
          direction="row"
          spacing={6}
          justifyContent="center"
          display={{ lg: "none", md: "flex", xs: "none" }}
          flexGrow={1}
        >
          {ITEMS_HEADER.slice(1, -1).map((item) => (
            <Box
              key={item.title}
              onMouseEnter={(e) => handleMouseEnterSecond(e, item)}
              onMouseLeave={handleMouseLeaveSecond}
            >
              <Typography
                component={Link}
                to="/"
                sx={{
                  color: COLOR_2,
                  fontSize: 17,
                  display: "inline-flex",
                  textTransform: "none",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                {item.title}
                {item.icon}
              </Typography>
              <Menu
                anchorEl={anchorElSecond}
                open={currentMenuSecond === item}
                onClose={handleMouseLeaveSecond}
                elevation={0}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: 0,
                  },
                  "& .MuiBackdrop-root": {
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    top: "98px",
                  },
                }}
                MenuListProps={{
                  onMouseLeave: handleMouseLeaveSecond,
                }}
              >
                <List component="nav" disablePadding>
                  {item.items.map((menuItem, index) => (
                    <ListItem
                      key={index}
                      onClick={handleMouseLeaveSecond}
                      sx={{
                        "&:hover": {
                          backgroundColor: COLOR_1,
                        },
                      }}
                    >
                      <ListItemText primary={menuItem} />
                    </ListItem>
                  ))}
                </List>
              </Menu>
            </Box>
          ))}
        </Stack>
        <Stack direction="row" spacing={2}>
          <CiSearch size={30} color={COLOR_1} />
          <CiShoppingCart size={30} color={COLOR_1} />
          <CiUser size={30} color={COLOR_1} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
