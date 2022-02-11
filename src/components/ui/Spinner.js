import React from 'react'
import spinner from '../../img/spinner.gif'


const Spinner = () => {
  return (
    <img src={spinner} style={{width: '200px', display:'block', margin:'auto'}} alt='Loading' />
  )
}

export default Spinner