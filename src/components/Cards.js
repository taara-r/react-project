import React from 'react'
// Styles
import styles from './Cards.module.scss'
// Components
import Card from './Card'

const Cards = ({ products }) => {
  
  return (
    <div className={styles.container}>
      {products.map(product => <Card key={product.id} {...product}/>)}
    </div>
  )
}

export default Cards