import React from "react";
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/alok_.xo/"><Instagram /></a>
        <a href="https://wa.me/9348385703/"><WhatsApp /></a>    
        <a href="https://www.facebook.com/alokkumar.das.9889/"><Facebook /></a>    
        <a href="https://twitter.com/AloKk_4"><Twitter /></a>
      </div>
      <p> &copy; 2023 rajanikant.com</p>
    </div>
  );
}

export default Footer;