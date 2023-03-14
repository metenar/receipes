import React from 'react'
import CatCard from '../../components/catCard/CatCard'
import YemekCard from '../../components/yemekCard/YemekCard'
import Slide from '../../components/slider/Slide'
import { cards } from '../../data'
import "./home.scss"


function Home() {
  return (
    <div className="Home">
      <Slide slidesToShow={4} arrowsScroll={4}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
      <div className="yemekler">
      {cards.map((card) => (
          <YemekCard item={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default Home