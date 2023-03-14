/* eslint-disable react/prop-types */
import React from 'react'
import "./catCard.scss"
import {Link} from "react-router-dom"

function CatCard({item}) {
  return (
    <Link to={`/catogories/${item.id}`} className='link'>
        <div className='catCard'>
            <img src={item.img} alt="" />
            <span>{item.title}</span>
        </div>
    </Link>
  )
}

export default CatCard