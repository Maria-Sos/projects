import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";
import {Divider} from "@mui/material";


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
	setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
	setAnchorEl(null);
  };
  const linkStyle = {
	textDecoration: "none",
	color: 'black'
  }
  const headingStyle = {
	marginLeft: "10px",
	color: 'darkblue'
  }

  const btnStyle = {
	color: 'white'
  }

  return (
	<div>
	  <Button
		variant="outlined"
		style={btnStyle}
		id="basic-button"
		aria-controls={open ? 'basic-menu' : undefined}
		aria-haspopup="true"
		aria-expanded={open ? 'true' : undefined}
		onClick={handleClick}
	  >
		Click on ME!
	  </Button>
	  <Menu
		id="basic-menu"
		anchorEl={anchorEl}
		open={open}
		onClose={handleClose}
		MenuListProps={{
		  'aria-labelledby': 'basic-button',
		}}
	  >
		<h3 style={headingStyle}>React projects</h3>
		<MenuItem onClick={handleClose}>
		  <Link style={linkStyle} to="/">Home</Link>
		</MenuItem>
		<MenuItem onClick={handleClose}>
		  <Link style={linkStyle} to="/memory-game">Memory Game</Link>
		</MenuItem>
		<Divider />
		<h3 style={headingStyle}>HTML/CSS projects</h3>
		<MenuItem onClick={handleClose}>
		  <a href="https://unique-alluring-shovel.glitch.me" style={linkStyle} target="_blank" rel="noopener noreferrer">Bakery web page</a>
		  {/*<Link style={linkStyle} hrefLang="https://unique-alluring-shovel.glitch.me">Bakery web page</Link>*/}
		</MenuItem>
		<MenuItem onClick={handleClose}>
		  <a href="https://sun-befitting-musician.glitch.me" style={linkStyle} target="_blank" rel="noopener noreferrer">Advocate web page</a>
		</MenuItem>
		<MenuItem onClick={handleClose}>
		  <a href="https://weak-trail-pyjama.glitch.me" style={linkStyle} target="_blank" rel="noopener noreferrer">My favorite movies (example)</a>
		</MenuItem>
		{/*<MenuItem onClick={handleClose}>*/}
		{/*  <Link style={linkStyle} to="/kanban">Kanban board</Link>*/}
		{/*</MenuItem>*/}
		{/*<MenuItem onClick={handleClose}>*/}
		{/*  <Link style={linkStyle} to="/tic-tac-toe">Tic Tac Toe</Link>*/}
		{/*</MenuItem>*/}
	  </Menu>
	</div>
  );
}
