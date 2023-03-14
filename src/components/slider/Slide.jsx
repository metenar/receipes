/* eslint-disable react/prop-types */
import React from 'react'
import "./slide.scss"
import Slider from 'infinite-react-carousel';



function Slide({children,slidesToShow,arrowsScroll}) {
  return (
    <div className="slide">
      <div className="container">
        <Slider dots slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}> 
            {children}
        </Slider>
      </div>
    </div>
  );
}

export default Slide