import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link } from "react-router-dom";
import { ITEMS_HEADER } from "../data/Commons.jsx";
import { IMG_1 } from "../assets/img.js";

const MenuHeader = () => {
    const [open, setOpen] = useState(false);

    return (
        <Box>
            <IconButton
                aria-label="open drawer"
                onClick={() => setOpen(true)}
                edge="start"
                sx={{ display: { xs: "block", md: "none" } }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box sx={{ p: 2 }}>
                    <Link to="/">
                        <img src={IMG_1} height={80} width={90} style={{ display: "block", margin: "auto" }} alt="Logo" />
                    </Link>
                </Box>
                <List>
                    {ITEMS_HEADER.map((list) => (
                        <ListItem key={list.title} disablePadding sx={{ my: 1 }}>
                            <ListItemButton component={Link} to={list.path}>
                                <ListItemIcon sx={{ minWidth: "auto", justifyContent: "center" }}>
                                    {list.icon2}
                                </ListItemIcon>
                                <Typography variant="body1" sx={{ ml: 1 }}>
                                    {list.title}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}

export default MenuHeader;
