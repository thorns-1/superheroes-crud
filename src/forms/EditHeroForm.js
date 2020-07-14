import React, { useState, useEffect } from 'react'

const EditHeroForm = props => {

    const [hero, setHero] = useState(props.currentHero);

    useEffect(
        () => {
          setHero(props.currentHero)
        },
        [props]
      )

    const handleInputChange = event => {
        const { name, value } = event.target
        setHero({ ...hero, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (!hero.nickname || !hero.real_name || !hero.origin_description || !hero.catch_phrase || !hero.images) return
        
        props.updateHero(hero.id, hero);

        //setHero(initialFormState);
    }


  return (
    <form style={{width: 200}} onSubmit={handleSubmit} >
      <label>Nickname</label>
      <input 
        type="text" 
        name="nickname" 
        value={hero.nickname}
        onChange={handleInputChange}
      />
      <label>Real name</label>
      <input 
        type="text" 
        name="real_name" 
        value={hero.real_name}
        onChange={handleInputChange}
      />
      <label>Origin description</label>
      <input 
        type="text" 
        name="origin_description" 
        value={hero.origin_description}
        onChange={handleInputChange}
      />
      <label>Superpowers</label>
      <input 
        type="text" 
        name="superpowers" 
        value={hero.superpowers}
        onChange={handleInputChange}
      />
      <label>Catchphrase</label>
      <input 
        type="text" 
        name="catch_phrase" 
        value={hero.catch_phrase}
        onChange={handleInputChange}
      />
      <label>Image (URL)</label>
      <input 
        type="text" 
        name="images" 
        value={hero.images}
        onChange={handleInputChange}
      />
      <button>Update Hero</button>
      <button
        onClick={()=>props.setEditing(false)}
      >
          Cancel
      </button>
    </form>
  )
}

export { EditHeroForm }