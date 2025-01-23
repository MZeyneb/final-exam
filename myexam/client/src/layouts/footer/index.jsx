import React from 'react'
import styles from "./index.module.scss"
import Grid from '@mui/material/Grid2';
const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
        <Grid container spacing={2} className={styles["box"]}>
        <Grid size={{xs: 12, md:6, lg:3}}>
            <p><span>Vegefoods</span></p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </Grid>
        <Grid size={{xs: 12, md:6, lg:3}}>
            <p><span>Menu</span></p>
            <ul>
                <li>Shop</li>
                <li>About</li>
                <li>Journal</li>
                <li>Contact Us</li>

            </ul>
        </Grid>
        <Grid size={{xs: 12, md:6, lg:3}}>
            <p><span>Help</span></p>
            <ul>
                <li>Shipping Information</li>
                <li>Returns & Exchange</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>

            </ul>
        </Grid>
        <Grid size={{xs: 12, md:6, lg:3}}>
            <p><span>Have a question?</span></p>
            <ul>
                <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
                <li>+2 392 3929 210</li>
                <li>Terms & Conditions</li>
                <li>info@yourdomain.com</li>

            </ul>
        </Grid>

        </Grid>
        <p className={styles["pm"]}>Copyright ©2025 All rights reserved | This template is made with  by <a href="#">Colorlib</a></p>

        </div>
    </footer>
    </>
  )
}

export default Footer
