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

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);

  const handleMouseEnter = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  return (
    <AppBar sx={{ bgcolor: "white" }} position="sticky">
      <Toolbar>
        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Link to="/">
            <img src={IMG_1} height={90} width={100} alt="Logo" />
          </Link>
        </Box>
        <Stack
          direction="row"
          spacing={6}
          justifyContent="center"
          display={{ xs: "none", sm: "flex" }}
          flexGrow={1}
        >
          {ITEMS_HEADER.map((item) => (
            <Box
              key={item.title}
              onMouseEnter={(e) => handleMouseEnter(e, item)}
              onMouseLeave={handleMouseLeave}
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
                anchorEl={anchorEl}
                open={currentMenu === item}
                onClose={handleMouseLeave}
                elevation={0}
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
                  onMouseLeave: handleMouseLeave,
                }}
              >
                <List component="nav" disablePadding>
                  {item.items.map((menuItem, index) => (
                    <ListItem
                      key={index}
                      onClick={handleMouseLeave}
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
          justifyContent="center"
          display="flex"
          spacing={2}
          flexGrow={1}
        >
          <CiSearch size={30} color={COLOR_1} />
          <CiShoppingCart size={30} color={COLOR_1} />
          <CiUser size={30} color={COLOR_1} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
