import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {

  render () {
    return (
      <nav className="contacts--navigation--container">
      	<div className="contacts--navigation--container-links">
	        <Link className="contacts--navigation--container-links_item divider" to="/">All Contacts</Link>
	         <Link className="contacts--navigation--container-links_item" to="/favorites">Favorites</Link>
        </div>
      </nav>
    );
  }
}

export default Menu;
