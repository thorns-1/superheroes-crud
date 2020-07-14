import React, { useState } from 'react';
import { AddHeroForm } from './forms/AddHeroForm'
import { EditHeroForm } from './forms/EditHeroForm'
import { HeroTable } from './tables/HeroTable'
import { HeroInfo } from './tables/HeroInfo'
import './App.css';

function App() {

  const heroesData = [
    {
      id: 1,
      nickname: "Superman",
      real_name: "Clark Kent",
      origin_description: "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypron's destruction...",
      superpowers: "solar energy absorbtion",
      catch_phrase: "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
      images: "https://i.pinimg.com/originals/05/c8/1f/05c81fc6606f614ccdcf307c1e85d099.png",
    },
    {
      id: 2,
      nickname: "Batman",
      real_name: " Bruce Wayne",
      origin_description: "he looks like bat",
      superpowers: "lots of money",
      catch_phrase: "Look, up in the sky, it's a bird, it's a plane, it's Batman!",
      images: "https://upload.wikimedia.org/wikipedia/en/1/19/Batman_%28circa_2016%29.png",
    },
  ];

  const [heroes, setHeroes] = useState(heroesData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { 
    id: null,
    nickname: "",
    real_name: "",
    origin_description: "",
    superpowers: "",
    catch_phrase: "",
    images: "",
   };
  const [currentHero, setCurrentHero] = useState(initialFormState);

  const showHero = hero => {
    setCurrentHero({
      id: hero.id,
      nickname: hero.nickname,
      real_name: hero.real_name,
      origin_description: hero.origin_description,
      superpowers: hero.superpowers,
      catch_phrase: hero.catch_phrase,
      images: hero.images,
    })
  }

  const addHero = hero => {
    hero.id = heroes.length + 1;
    setHeroes([ ...heroes, hero ]);
  }

  const deleteHero = id => {
    setEditing(false);
    setHeroes(heroes.filter(hero => hero.id !== id));
  }

  const updateHero = (id, updatedHero) => {
    setEditing(false);
    setHeroes(heroes.map(hero => (hero.id === id ? updatedHero : hero)));
  }

  const editRow = hero => {
    setEditing(true);
    setCurrentHero({
      id: hero.id,
      nickname: hero.nickname,
      real_name: hero.real_name,
      origin_description: hero.origin_description,
      superpowers: hero.superpowers,
      catch_phrase: hero.catch_phrase,
      images: hero.images,
    })
  }

  return (
    <div className="App">
      <h1> SUPERHEROES CRUD </h1>
      <div className="main">
        <div className="AddHeroForm">
          { editing ? (
          < EditHeroForm 
            editing={editing}
            setEditing={setEditing}
            currentHero={currentHero}
            updateHero={updateHero}
          />
          ) : (
          < AddHeroForm addHero={addHero} />
          )}
        </div>
        <div className="HeroTable">
          < HeroTable heroes={heroes} deleteHero={deleteHero} editRow={editRow} showHero={showHero} />
        </div>
        <div className="HeroInfo">
         <h3>SUPERHERO INFO</h3>
          < HeroInfo 
            currentHero={currentHero}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
