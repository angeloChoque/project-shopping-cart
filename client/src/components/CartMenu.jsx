import React from "react";
import {
  Menu,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useShoppingContext } from "../context/shoppingContext";

const CartMenu = ({ anchorEl, isOpen, handleClose }) => {
  const { cartItems, incrementQuantity, decrementQuantity } =
    useShoppingContext();

  return (
    <Menu
      anchorEl={anchorEl}
      open={isOpen}
      onClose={handleClose}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{
        "& .MuiPaper-root": {
          borderRadius: 1,
          width: "330px",
          marginTop: 2,
          marginTop:"90px",
          // overflow: "visible",
          // filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          // "&::before": {
          //   content: '""',
          //   display: "block",
          //   position: "absolute",
          //   top: 3,
          //   left:220,
          //   width: 10,
          //   height: 10,
          //   bgcolor: "background.paper",
          //   transform: "translateY(-50%) rotate(45deg)",
          //   zIndex: 0,
          // },
        },
      }}
    >
      <List component="nav" disablePadding>
        {cartItems.length === 0 ? (
          <ListItem>
            <ListItemText primary="There are no products in the cart" />
          </ListItem>
        ) : (
          cartItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar src={item.imageUrl} />
              </ListItemAvatar>
              <ListItemText
                primary={item.NameProduct}
                secondary={`$${item.Price}`}
              />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  onClick={() => decrementQuantity(item._id)}
                  size="small"
                  sx={{ marginRight: 1 }}
                >
                  <Remove />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton
                  onClick={() => incrementQuantity(item._id)}
                  size="small"
                  sx={{ marginLeft: 1 }}
                >
                  <Add />
                </IconButton>
              </Box>
            </ListItem>
          ))
        )}
        {cartItems.length > 0 && (
          <ListItem>
            <Button fullWidth variant="contained" onClick={handleClose}>
              Checkout
            </Button>
          </ListItem>
        )}
      </List>
    </Menu>
  );
};

export default CartMenu;
