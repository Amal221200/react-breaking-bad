import React from 'react'
import spinner from '../../img/spinner.gif'

const CharacterGrid = ({ isLoading, items}) => {
  return (
    isLoading ? <img src={spinner} alt="" /> : (
        <section className='cards'>
            {items.map(item =>(
                <h1>{item.name}</h1>
            ))}
        </section>
    )
  )
}

export default CharacterGrid