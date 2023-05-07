import React, { useEffect, useState } from 'react'
import axios from 'axios'
// Styles
import styles from './App.module.scss'
// Components
import Error from './components/Error'
import Cards from './components/Cards'


const App = () => {
  
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        const data = res.data.slice(0, 3)
        data[1].discount = 25
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])
  
  return (
    <div className={styles.container}>
      {loading && <p className={styles.loading}>Loading...</p>}
      {!loading &&!!error && <Error error={error}/>}
      {!loading &&!error && !!products.length && <Cards products={products}/>}
    </div>
  )
}

export default App