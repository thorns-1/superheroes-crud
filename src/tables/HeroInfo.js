import React, { useState, useEffect } from 'react'

const HeroInfo = props => {

    const [hero, setHero] = useState(props.currentHero);

    useEffect(
        () => {
          setHero(props.currentHero)
        },
        [props]
      )

  return (
      <div className="HeroInfoTable">
      <img style={{width:200}} src={hero.images} alt="HeroImage" />  
      <p>Nickname: {hero.nickname}</p>
      <p>Real name: {hero.real_name}</p>
      <p>Origin description: {hero.origin_description}</p>
      <p>Superpowers: {hero.superpowers}</p>
      <p>Catchphrase: {hero.catch_phrase}</p>
      </div>
  )
}

export { HeroInfo }