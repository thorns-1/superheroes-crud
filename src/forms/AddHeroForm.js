import React, { useState } from 'react'

const AddHeroForm = props => {

    const initialFormState = { 
        id: null,
        nickname: "",
        real_name: "",
        origin_description: "",
        superpowers: "",
        catch_phrase: "",
        images: "",
    }

    const [hero, setHero] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.currentTarget
        setHero({ ...hero, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (!hero.nickname || !hero.real_name || !hero.origin_description || !hero.catch_phrase || !hero.images) return
        
        props.addHero(hero);

        setHero(initialFormState);
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
      <button>Add new hero</button>
    </form>
  )
}

export { AddHeroForm }