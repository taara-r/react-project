import React, { useState } from 'react'
import { AiFillStar, AiFillHeart, AiOutlineShoppingCart, AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from 'react-icons/ai'
// Styles
import styles from './Card.module.scss'

const Card = ({id, title, image, price, category, rating: { rate, count }, discount}) => {
  
  const [isFavorite, setIsFavorite] = useState(false)
  const [cart, setCart] = useState(0)
  
  const goToDetails = () => {
    window.location.href = '/'
  }
  
  const thousandSeparator = (value) => {
    const num = parseFloat(value)
    const formatted = num.toLocaleString('en-US')
    return formatted;
  }
  
  const discountCalculator = (price, discount) => {
    discount = !!discount ? discount : 0
    return (parseFloat(+price * (100 - +discount) / 100))
  }
  
  const favoriteHandler = () => setIsFavorite(prevState => !prevState)
  
  const increaseCart = () => setCart(prevState => prevState + 1)
  const decreaseCart = () => (cart > 0) ? setCart(prevState => prevState - 1) : setCart(prevState => prevState)
  
  
  
  return (
    <article className={styles.container} title={title}>
      
      <div className={styles.imageContainer} onClick={goToDetails}>
        <img src={image} alt={title} className={styles.image}/>
        {!!discount && (
          <p className={styles.discountBadge}>
            {discount} <span className={styles.discountSign}>%</span>
          </p>
        )}
        <div className={styles.rating}>
          <AiFillStar className={styles.icon}/>
          <span className={styles.rate}>{rate}</span>
          <span className={styles.count}>({count})</span>
        </div>
      </div>
      
      <p className={styles.category}>Category: <a href='/'>{category}</a></p>
      
      <div className={styles.content}>
        <a href='/' className={styles.title}>{title}</a>
        <div className={styles.priceContainer}>
          <p className={styles.currentPrice}>
            {discountCalculator(thousandSeparator(price), discount).toFixed(2)}
            <span className={styles.currency}>$</span>
          </p>
          <del className={styles.oldPrice}>
            {thousandSeparator(price)}
            <span className={styles.currency}>$</span>
          </del>
        </div>
      </div>
      
      <div className={styles.buttonsContainer}>
        <button type='button' className={`${styles.favorite} ${isFavorite ? styles.active : ''}`} onClick={favoriteHandler}>
          <AiFillHeart/>
        </button>
        <div className={styles.cartButtons}>
          {cart <= 0 && (
            <button type='button' className={styles.addToCart} onClick={increaseCart}>
              <AiOutlineShoppingCart/>
            </button>
          )}
          {cart === 1 && (
            <button type='button' className={styles.removeFromCart} onClick={decreaseCart}>
              <AiOutlineDelete/>
            </button>
          )}
          {cart > 1 && (
            <button type='button' className={styles.decreaseCart} onClick={decreaseCart}>
              <AiOutlineMinus/>
            </button>
          )}
          {cart > 0 && (
            <div className={styles.counter}>
              <span>{cart}</span>
            </div>
          )}
          {cart > 0 && (
            <button type='button' className={styles.increaseCart} onClick={increaseCart}>
              <AiOutlinePlus/>
            </button>
          )}
        </div>
      </div>
      
    </article>
  )
}

export default Card