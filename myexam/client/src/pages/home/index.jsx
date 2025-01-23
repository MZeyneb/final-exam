import React from 'react'
import styles from "./index.module.scss"
import Foods from '../foods'
import { Helmet } from 'react-helmet-async'
import { FaCarSide } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import Grid from '@mui/material/Grid2';
const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home Page</title>
        <meta name="keywords" content="The Home Page"/>
    </Helmet>
    <section className={styles["hero"]}>
        <div className="container">
        <div className={styles["texts"]}>
        <h1>100% FRESH & ORGANIC FOODS</h1>
        <p>WE DELIVER ORGANIC VEGETABLES & FRUITS</p>
        <button>View Details</button>
        </div>

        </div>

    </section>
        <section className={styles["logos"]}>
            <div className="container">

                <div className={styles["lgs"]}>

                <div className={styles["car"]}>
                <div className={styles["cart"]}>
                    <FaCarSide />

                </div>
            </div>
            <div className={styles["snack"]}>
            <div className={styles["snackt"]}>
            <IoFastFood />

                </div>
            </div>
            <div className={styles["honor"]}>
            <div className={styles["honort"]}>
            <FaAward />

                </div>
            </div>
            <div className={styles["person"]}>
            <div className={styles["persont"]}>
            <IoPersonAdd />

                </div>
            </div>

                    
                </div>

            

            </div>


        </section>
    <Foods/>

    <section className={styles["customer"]}>
        <div className="container">
        <div className={styles["box"]}>
        <div className={styles["textss"]}>
            <p><span>Testimony</span></p>
            <h2>Our satisfied customer says</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
        </div>
        <Grid container spacing={2} className={styles["cards"]}>
        <Grid size={{xs: 12, md: 6, lg: 4}}  className={styles["card"]}>
        <div className={styles["imgg"]}>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/person_2.jpg" alt="" />

        </div>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <h4>Garreth Smith</h4>
        <h6>INTERFACE DESIGNER</h6>
        </Grid>
        <Grid size={{xs: 12, md: 6, lg: 4}}  className={styles["card"]}>
        <div className={styles["imgg"]}>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/person_3.jpg" alt="" />

        </div>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <h4>Garreth Smith</h4>
        <h6>INTERFACE DESIGNER</h6>
        </Grid>
        <Grid size={{xs: 12, md: 6, lg: 4}}  className={styles["card"]}>
        <div className={styles["imgg"]}>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/person_4.jpg" alt="" />

        </div>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <h4>Garreth Smith</h4>
        <h6>INTERFACE DESIGNER</h6>
        </Grid>

        </Grid>

        </div>

        </div>

    </section>
    <section className={styles["newsletter"]}>
        <div className="container">
            <div className={styles["box"]}>
                <div className={styles["subs"]}>
                    <h3>Subcribe to our Newsletter</h3>
                    <p>Get e-mail updates about our latest shops and special offers</p>
        
                </div>
                <div className={styles["eml"]}>
                    <input type="text" placeholder='Enter email address'/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Home
