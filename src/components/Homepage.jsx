import React from "react";
import { AppBar, Toolbar, IconButton, Button, Fab } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function BurgerHouse() {
  return (
    <div className="w-full min-h-screen relative">
      {/* Navbar */}
      <AppBar position="static" elevation={0} className="!bg-[#e5e1dc]">
        <Toolbar className="flex justify-between">
          <div className="flex items-center gap-2">
            <MenuIcon className="text-black" />
            <span className="font-bold tracking-widest text-black">
              BURGER <span className="text-orange-500">HOUSE</span>
            </span>
          </div>
          <div className="hidden md:flex gap-6 text-sm text-gray-700">
            <a href="#" className="hover:text-black">Menu</a>
            <a href="#" className="hover:text-black">About</a>
            <a href="#" className="hover:text-black">Contact</a>
          </div>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <div
        className="relative min-h-[calc(100vh-64px)] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550547660-d9450f859349')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-white text-6xl md:text-8xl font-extrabold tracking-widest">
            BURGER
          </h1>
          <h1 className="text-orange-500 text-6xl md:text-8xl font-extrabold tracking-widest mt-2">
            HOUSE
          </h1>

          <p className="text-gray-200 mt-6 text-lg">
            Handcrafted burgers & classic American favorites
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <Button
              variant="contained"
              className="!bg-gradient-to-r !from-orange-600 !to-orange-400 !px-8 !py-3 !rounded-full"
            >
              VIEW MENU
            </Button>
            <Button
              variant="outlined"
              className="!border-white !text-white !px-8 !py-3 !rounded-full"
            >
              ORDER NOW
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Cart Button */}
      <Fab
        color="warning"
        className="!fixed bottom-6 right-6"
      >
        <ShoppingCartIcon />
      </Fab>
    </div>
  );
}
