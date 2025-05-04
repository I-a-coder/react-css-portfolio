import React, { useState } from "react";
import styles from "./SideNav.module.css";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

const navLinks = [
  { text: "Home", path: "/" },
  { text: "Education", path: "/education" },
  { text: "Experience", path: "/experience" },
  { text: "Projects", path: "/projects" },
  { text: "Leadership", path: "/leadership" },
  { text: "Skills", path: "/skills" },
  { text: "Contact", path: "/contact" },
];

function SideNav() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => setOpen(true)}
          className={styles.menuButton}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? open : true}
        onClose={() => setOpen(false)}
        classes={{ paper: styles.drawerPaper }}
      >
        <List>
          {navLinks.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              onClick={() => setOpen(false)}
              className={styles.navItem}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default SideNav;