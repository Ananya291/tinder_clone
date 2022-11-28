import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    <div className="Header">
      <IconButton>
        <PersonIcon fontSize="large" className="Header__icon" />
      </IconButton>
      <img
        src="https://w7.pngwing.com/pngs/698/493/png-transparent-tinder-hd-logo-thumbnail.png"
        className="Tinder__logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="Header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
