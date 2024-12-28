import { Typography, Button, IconButton, Box, AppBar, Toolbar, Drawer, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function about() {

  return (

    <div class="contener" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", gap: "80px" }} >

      <div>
        <h1>LAPTAP-TECH</h1>
        <p>
          Features
          Laptops are battery-powered, have a flat-panel screen, and usually have a keyboard and pointing device on the inside of the lower lid. Many modern laptops have a webcam at the top of the screen, and some have a touchscreen display.
          Uses
          Laptops can be used for a variety of tasks, including browsing the internet, creating documents, and playing games.
          Advantages
          Laptops are more power efficient than desktop computers, and their portability and battery allow for productivity almost anywhere.
          Disadvantages
          Laptops are generally more expensive than desktop computers, and they're often slower for resource-intensive tasks like gaming, video editing, or graphic design. They're also more easily stolen, and they can be damaged if they're frequently traveled with.
        </p>
      </div>
      <div class>
        <img src={require('../component/30.jpg')} width="600px" height="500px" sx={{ borderRadius: "20px" }} ></img>
      </div>
    </div>
  )
}

export default about;