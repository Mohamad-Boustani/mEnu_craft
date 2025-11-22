import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Button from '@mui/material/Button';
function Navbar() {
  return (
    <div>
      <header className="w-full bg-white border-b border-gray-200 px-4 pt-3 pb-2">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          <MenuIcon className="text-2xl text-gray-700 cursor-pointer" />


          <ShoppingCartIcon className="text-2xl text-gray-700 cursor-pointer" />
        </div>

        {/* Search Bar */}
        <div className="mt-4 flex items-center bg-gray-100 rounded-xl px-3 py-2">
          <SearchIcon className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search items..."
            className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-around mt-3 text-gray-700 font-medium border-t border-gray-200 pt-2">
          <Button className="hover:text-black cursor-pointer" style={{ background: 'none', boxShadow: 'none', color: 'inherit' }}>
            My Favorites
          </Button>
          <Button className="hover:text-black cursor-pointer" style={{ background: 'none', boxShadow: 'none', color: 'inherit' }}>
            My Orders
          </Button>
          <Button className="hover:text-black cursor-pointer" style={{ background: 'none', boxShadow: 'none', color: 'inherit' }}>
            My Account
          </Button>
        </nav>
      </header>
        
    </div>
  );
}

export default Navbar;
