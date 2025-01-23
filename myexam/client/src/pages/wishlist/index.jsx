import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import Grid from '@mui/material/Grid2';
import { WishlistContext } from '../../context/WishlistProvider';
import styles from "./index.module.scss"
import { FaHeart } from "react-icons/fa";
export const Wishlist = () => {
    const {wishlist, toggleWishlist} = useContext(WishlistContext)
  return (
    <>
    <Helmet>
        <title>Wishlist</title>
        <meta name="keywords" content="Wishlist page"/>
    </Helmet>
    <Grid container spacing={2} className={styles["products"]}>
        {
            wishlist.map((food, index)=>(
                <Grid size={{xs: 12, md: 6, lg: 3}} className={styles["product"]} key={index} >
                        <FaHeart className={styles["heart"]} onClick={()=>{{toggleWishlist(food)}}}/>
                        <div className={styles["imge"]}>
                        <img src={food.image} alt="" onClick={()=> nav(`../details/${food._id}`)}/>

                        </div>
                        <h3>{food.name}</h3>
                        <p>${food.price}</p>

                    </Grid>
            ))
        }
    </Grid>


    </>
  )
}

export default Wishlist
