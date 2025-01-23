import React, { useState, useEffect, useContext } from 'react'
import { BASE_URL } from '../../constants'
import styles from "./index.module.scss"
import Grid from '@mui/material/Grid2';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'
import { FaHeart } from "react-icons/fa";
import { WishlistContext } from '../../context/WishlistProvider';


const Foods = () => {
    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState("")
    const [sortBy, setSortBy] = useState("name")
    const {toggleWishlist} = useContext(WishlistContext)
    const nav = useNavigate()
    const getAllFoods = async()=>{
        try {
            const res = await axios.get(`${BASE_URL}`)
            setFoods(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const sortedFoods = (foodsList)=>{
        const cloned = [...foodsList]
        if(sortBy === "ASC"){
            return cloned.sort((a, b)=> a.price-b.price)
        }
        else if(sortBy === "DESC"){
            return cloned.sort((a, b)=> b.price-a.price)
        }
        return cloned
        
    }

    useEffect(() => {
      getAllFoods()
    
    }, [])

    const filtered = foods.filter((f)=> f.name.toLowerCase().includes(search.toLowerCase().trim()))
    const sortedAndFiltered = sortedFoods(filtered)

  return (
    <>
        <Helmet>
        <title>Foods</title>
        <meta name="keywords" content="very tasty foods"/>
    </Helmet>

    <section className={styles["foods"]}>

            <div className={styles["textss"]}>
            <p><span>Featured Products</span></p>
            <h2>Our Products</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <br />
        </div>
        <div className="container">
        <Grid container spacing={2} className={styles["products"]}>
            

            <div className={styles["inp"]}>
                <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                    <option value="default">Default</option>

                </select>
        <input type="text" placeholder='Search' onChange={(e)=> setSearch(e.target.value)}/>
            </div>
        {
            sortedAndFiltered.length> 0 && sortedAndFiltered.map((f)=>{
                return(
                    <Grid size={{xs: 12, md: 6, lg: 3}} className={styles["product"]} key={f._id} >
                        <FaHeart className={styles["heart"]} onClick={()=>{{toggleWishlist(foods)}}}/>
                        <div className={styles["imge"]}>
                        <img src={f.image} alt="" onClick={()=> nav(`../details/${f._id}`)}/>

                        </div>
                        <h3>{f.name}</h3>
                        <p>${f.price}</p>

                    </Grid>

                )
            })

        }
        </Grid>

        </div>

    </section>
    
    </>
  )
}

export default Foods
