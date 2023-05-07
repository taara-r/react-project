import React from 'react'
// Styles
import styles from './Error.module.scss'

const Error = ({error}) => {
  return (
    <div className={styles.container}>
      <h4>Error Message</h4>
      <p>{error}</p>
    </div>
  )
}

export default Error