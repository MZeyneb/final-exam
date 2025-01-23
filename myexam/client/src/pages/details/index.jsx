import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants'
import { useParams } from 'react-router-dom'
import styles from "./index.module.scss"
import axios from "axios"
import { Helmet } from 'react-helmet-async'
const Details = () => {
    const [food, setFood] = useState([])
    const {id} = useParams()
    const getFood = async()=>{
        try {
            const res = await axios.get(`${BASE_URL}/${id}`)
            setFood(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
      
        getFood()
      
    }, [id])
    

  return (
    <>
    <Helmet>
        <title>Details</title>
        <meta name="keywords" content="very important details"/>
    </Helmet>
    <section className={styles["details"]}>
        <div className="container">
    {
        food && 
        <div className={styles["boxy"]}>
            <div className={styles["imga"]}>
            <img src={food.image} alt="" />

            </div>
            <div className={styles["txts"]}>
            <h2>{food.name}</h2>
            <p>${food.price}</p>

            </div>
        </div>

    }

        </div>

    </section>
    
    </>
  )
}

export default Details
