import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

function Logo(props) {
  return (
    <>
				{
					props.mainPage ? 
						<div className={props.className}></div> :
						<Link to="/">
							<div className={props.className}></div>
						</Link>
				}					
		</>
	);
}

export default Logo;