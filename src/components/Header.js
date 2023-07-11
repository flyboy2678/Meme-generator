import React from "react";
import troll from "../images/troll-face.png";
export default function Header() {
	return (
		<nav>
			<img src={troll} className="trollface" />
			<h1 className="logo">Meme Genarator</h1>
		</nav>
	);
}
