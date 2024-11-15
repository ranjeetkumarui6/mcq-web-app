import React, { useContext } from 'react'
import styles from './index.module.css'
import { contextStore } from '../Context/Store'
const Button = ({name}) => {
  const handlesubmit=useContext(contextStore)


  return (
    <>
     <button className={styles.buttoncontainer} onClick={handlesubmit.onSubmit}>{name}</button> 
    </>
  )
}

export default Button
