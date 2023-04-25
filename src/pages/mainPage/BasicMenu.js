import * as React from 'react';
import {Link} from "react-router-dom";

export default function BasicMenu() {
  const linkStyle = {
	textDecoration: "none",
	color: 'white'
  }

  const dropDownStyle = {
	backgroundColor: '#fcca00',
	borderColor: 'white',
  }

  return (
	<div>
	  <div className="dropdown dropend">
		<button className="btn-menu btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown"
				aria-expanded="false">
		  Click on ME!
		</button>
		<ul className="dropdown-menu" style={dropDownStyle}>
		  <li><h5 className="dropdown-header">HTML/CSS projects</h5></li>
		  <li><a className="dropdown-item" href="https://family-bakery-store.glitch.me" style={linkStyle} target="_blank">Bakery web page</a></li>
		  <li><a className="dropdown-item"  href="https://advocates.glitch.me" style={linkStyle} target="_blank">Advocate web page</a></li>
		  <li><h5 className="dropdown-header">JS Vanilla</h5></li>
		  <li><a className="dropdown-item"  href="https://to-do-vanilla.glitch.me" style={linkStyle} target="_blank">To Do List</a></li>
		  <li><hr className="dropdown-divider"/></li>
		  <li><h5 className="dropdown-header">React projects</h5></li>
		  <li><a className="dropdown-item" href="https://g-memory.netlify.app/" style={linkStyle}>Memory Game</a></li>
		  <li><a className="dropdown-item" href="https://kanban-and-firebase.netlify.app/" style={linkStyle}>Kanban board</a></li>
		  <li><Link className="dropdown-item disabled" to="" style={linkStyle}>...</Link></li>
		</ul>
	  </div>
	</div>
  );
}
