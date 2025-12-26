import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useCart } from "../context/Cartcontext";



import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import InventoryIcon from "@mui/icons-material/Inventory";

import { Link, useNavigate } from "react-router-dom";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
const [cartOpen, setCartOpen] = useState(false);
const { cartItems, removeFromCart } = useCart();




  const goToMenuSection = (id) => {
    navigate("/menu");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" elevation={0} className="!bg-[#e5e1dc]">
        <Toolbar className="flex justify-between">
          <div className="flex items-center gap-2">
            <MenuIcon
              className="text-black cursor-pointer"
              onClick={() => setOpen(true)}
            />
            <span className="font-bold tracking-widest text-black">
              BURGER <span className="text-orange-500">HOUSE</span>
            </span>
          </div>

          <div className="hidden md:flex gap-6 text-sm text-gray-700">
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
  <div className="hidden md:flex gap-6 text-sm text-gray-700">
    <Link to="/menu">Menu</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </div>

  <IconButton onClick={() => setCartOpen(true)}>
    <Badge badgeContent={cartItems.length} color="error">
      <ShoppingCartIcon className="text-black" />
    </Badge>
  </IconButton>
</div>

        </Toolbar>
      </AppBar>

      {/* SIDEBAR */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div className="w-64 p-4">
          <p className="text-xs text-gray-400 mb-2">NAVIGATION</p>

          <List>
            <ListItemButton component={Link} to="/home" onClick={() => setOpen(false)}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton component={Link} to="/about" onClick={() => setOpen(false)}>
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>

            <ListItemButton component={Link} to="/contact" onClick={() => setOpen(false)}>
              <ListItemIcon><CallIcon /></ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </List>

          <Divider className="my-4" />

          <p className="text-xs text-gray-400 mb-2">MENU</p>

          <List>
            <ListItemButton onClick={() => goToMenuSection("burgers")}>
              <ListItemIcon><LunchDiningIcon /></ListItemIcon>
              <ListItemText primary="Burgers" />
            </ListItemButton>

            <ListItemButton onClick={() => goToMenuSection("sides")}>
              <ListItemIcon><LocalDiningIcon /></ListItemIcon>
              <ListItemText primary="Sides" />
            </ListItemButton>

            <ListItemButton onClick={() => goToMenuSection("drinks")}>
              <ListItemIcon><LocalDrinkIcon /></ListItemIcon>
              <ListItemText primary="Drinks" />
            </ListItemButton>

            <ListItemButton onClick={() => goToMenuSection("combos")}>
              <ListItemIcon><InventoryIcon /></ListItemIcon>
              <ListItemText primary="Combos" />
            </ListItemButton>
          </List>
        </div>
      </Drawer>
          <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

    </>
    
  );
}
