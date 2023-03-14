/* eslint-disable react/prop-types */
import React from 'react'
import "./yemekCard.scss"
import {Link} from "react-router-dom"

function YemekCard({item}) {
  return (
    <Link to={`/yemekler/${item.id}`} className="link">
      <div className="container">
        <div className="yemekCard">
          <img src={item.img} alt="" />
          <span>{item.title}</span>
        </div>
      </div>
    </Link>
  );
}

export default YemekCard