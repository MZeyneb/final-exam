import React from 'react'
import styles from "./index.module.scss"
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  return (
    <>
    <nav>
        <div className="container">
            <div className={styles["box"]}>

        <h1><a href="#">Vegefoods</a></h1>

        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/foods"}>Foods</NavLink></li>
            <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
            <li><NavLink to={"/add"}>Add</NavLink></li>

        </ul>

        <div className={styles["menu"]}>
        <RxHamburgerMenu  className={styles["bar"]}/>
        <h2>MENU</h2>

        </div>


            </div>

        </div>
    </nav>
    </>
  )
}

export default Header
