import {useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import logo from "/images/logo.svg";
import menuIcon from "/images/icon-menu.svg";
import menuClose from "/images/icon-menu-close.svg";

const navLinks = ["Home","New","Popular","Trending","Categories"];


export default function Header(){
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header id="header">
      <section>
	<object type="image/svg+xml" data={logo}>
	</object>
	<nav> 
	  <div className="menu-open" onClick={()=>setShowMenu(true)}>
	    <img  src={menuIcon}  alt="open-menu-icon"/>
	  </div>
	  <AnimatePresence mode="wait">
	    {showMenu && (<motion.div  className="nav-mobile">
	      <div className="menu-close" onClick={()=>setShowMenu(false)}>
		<img  src={menuClose} alt="close-menu-icon"/>
	      </div>
	      <ul>
	      {navLinks.map((link,i)=>(
		<li className="nav-links" key={i}>
		 <a href="#">{link}</a>
		</li>
	      ))}
	      </ul>
	    </motion.div>)}
	  </AnimatePresence>
	  <div className="nav-desktop">
	    <ul>
	    {navLinks.map((link,i)=>(
	      <li className="nav-links" key={i}>
		<a href="#">{link}</a>
	      </li>
	    ))}
	    </ul>
	  </div>

	</nav>
      </section>
    </header>
  );
}
	
