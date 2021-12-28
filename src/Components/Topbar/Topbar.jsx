import React from "react";
import { Typography} from '@material-ui/core'
// import { ShoppingCart } from '@material-ui/icons'
import "./Topbar.scss";

import useStyles from './styles';

export default function Topbar({ menuOpen, setMenuOpen }) {
  const classes = useStyles();

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <div className="itemContainer"></div>
              <Typography varient="h6" className={classes.title} id="mcmonster" color="inherit">
                McMonster
              </Typography>
          </a>
        </div>
        <div className="right">
          <div className={classes.grow} />
          <div className={classes.button} />
          <div onClick={() => setMenuOpen(!menuOpen)} className="hamburger">
          <span className="lineone">1</span>
          <span className="linetwo">2</span>
          <span className="linethree">3</span>
          </div>
          </div>
          </div>
          </div>
          );
        }
        
        // <IconButton aria-label="Show cart items" color="grey">
        //   <Badge badgeContent={2} color="secondary">
        //     <ShoppingCart />
        //   </Badge>
        // </IconButton>