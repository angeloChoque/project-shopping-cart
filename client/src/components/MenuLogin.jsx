import { Settings, Logout } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { COLOR_1, COLOR_2 } from "../assets/color";
import { CiUser } from "react-icons/ci";
import axios from "axios";

const MenuLogin = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/verify");
        console.log(response);
        if (response.status === 200) {
          setLoggedIn(true);
          console.log(response.data);
        } else {
          false;
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        setLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        onClick={handleClick}
        sx={{
          color: COLOR_2,
        }}
      >
        <CiUser size={30} color={COLOR_1} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
              },
            },
          },
        }}
      >
        {loggedIn ? (
          [
            <MenuItem key="profile" onClick={handleClose}>
              <Avatar src={""} />
              <Typography ml={1}>Profile</Typography>
            </MenuItem>,
            <Divider key="divider" />,
            <MenuItem key="settings" onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>,
            <MenuItem key="logout" onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>,
          ]
        ) : (
          <MenuItem onClick={handleClose}>Login</MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default MenuLogin;
