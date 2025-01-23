import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from "./index.module.scss"
import { BASE_URL } from '../../constants';
import axios from "axios"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Helmet } from 'react-helmet-async'


const SignupSchema = Yup.object().shape({
  image: Yup.string()
    .min(2, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
price: Yup.number().required('Required'),
  
});


const Add = () => {
    const [foods, setFoods] = useState([])

    const getAllFoods = async()=>{
        try {
            const res = await axios.get(`${BASE_URL}`)
            setFoods(res.data)
            
        } catch (error) {
            console.log(error);
        }
    }
    const deleteFood = async(id)=>{
        try {
            const res = await axios.delete(`${BASE_URL}/${id}`)
            getAllFoods()
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
    getAllFoods()

    }, [])
    

  return (
    <>
    <Helmet>
        <title>Add Food</title>
        <meta name="keywords" content="Adding Porducts"/>
    </Helmet>
    <div className={styles["box"]}>
    <h1>Add Foods</h1>
     <Formik
       initialValues={{
         image: '',
         name: '',
         price: 0
       }}
       validationSchema={SignupSchema}
       onSubmit={async(values, {resetForm}) => {
        const res = axios.post(`${BASE_URL}`, values)
        resetForm()
         
       }}
     >
       {({ errors, touched }) => (
         <Form className={styles["form"]}>
           <Field name="image" placeholder={"image"} className={styles["field"]}/>
           {errors.image && touched.image ? (
             <div>{errors.image}</div>
           ) : null}
           <Field name="name" placeholder={"name"}  className={styles["field"]}/>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <Field name="price" placeholder={"price"}  className={styles["field"]}/>
           {errors.price && touched.price ? (
             <div>{errors.price}</div>
           ) : null}
           
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
     <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foods.length>0 && foods.map((row) => (
            <TableRow className={styles["rowv"]}
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell align="right"><img src={row.image} alt="" width={100}/></TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"><button onClick={()=>{
                window.confirm("Are you sure?") && deleteFood(row._id)
              }}>delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



    </div>
    
    </>
  )
}

export default Add
