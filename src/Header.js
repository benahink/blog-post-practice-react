import React from 'react';

const Header = () => {
  return (
	<nav class="navbar fixed-top bg-info">
  	  <div class="container-fluid">
    	  <a class="navbar-brand">Navbar</a>
    	  <form class="d-flex" role="search">
      		<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      		<button class="btn btn-outline-success" type="submit">Search</button>
    	  </form>
  	  </div>
	</nav>
  )
}

export default Header;