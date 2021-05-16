import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

function Logo(props) {
  return (
    <>
				{
					props.mainPage ? 
						<div className="header__logo"></div> :
						<Link to="/">
							<div className="header__logo header__logo_active"></div>
						</Link>
				}					
		</>
	);
}

export default Logo;