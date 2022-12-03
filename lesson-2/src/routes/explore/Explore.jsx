import React from 'react'
import c from './Explore.module.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {BsStarFill,BsStarHalf} from "react-icons/bs"

const Explore = () => {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/v2/allproducts")
      .then(response => response.json())
      .then(data => setProductData(data))
  }, [])

  console.log(productData);
  
  return (
    <div className={c.products}>
      {
          productData.map(({image, name, _id, ratings, price}) =>
            <article className={c.explore__products} key={_id}>
              <h1 className={c.explore__name}>{name}</h1>
              <img className={c.explore__image} src={image[0].url} alt="" />
              <div className={c.product__star}>
              {
                ratings % 1 === 0 ?
                new Array(ratings).fill("#").map(star =>
                  <BsStarFill/>
                )
                :
                <>
                {
                new Array(Math.floor(ratings)).fill("#").map(star =>
                  <BsStarFill/>
                )
                }
                <BsStarHalf/>
                </>
              }
              </div>
              <p className={c.product__price} >{price}$</p>
              <Link className={c.explore__link} to={`/explorenow/${_id}`}>Learn more</Link>
            </article>
          )
      }
    </div>
  )
}

export default Explore