import React from 'react'

const HeroTable = props => {

const handleDeleteHero = id => {
    let answer = window.confirm('Are you sure?')

    if (answer) {
        props.deleteHero(id)
    }
}

return ( 
 <div className="HeroTablediv" >
    {props.heroes.length > 0 ? (
    props.heroes.map(hero => (
        <div key={hero.id} className="HeroItem">
            <img style={{width:120}} src={hero.images} alt="HeroImage" />
            <h2>{hero.nickname}</h2>
            <div className="Actions" >
                <button 
                    className=""
                    onClick={()=> props.showHero(hero)}
                >
                🔍
                </button>
                <button 
                    className=""
                    onClick={()=> props.editRow(hero)}
                >
                🔨
                </button>
                <button 
                    className=""
                    onClick={()=> handleDeleteHero(hero.id)}  
                >
                🗑️
                </button>
            </div>
        </div>
        ))
      ) : (
        <p>No heroes</p>
      )}
 </div>
)
}

export { HeroTable }