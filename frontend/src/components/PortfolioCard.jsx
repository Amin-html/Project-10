import { useState } from 'react'
import styles from './PortfolioCard.module.scss'

function PortfolioCard({ item }) {
  const [showAfter, setShowAfter] = useState(true)

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={showAfter ? item.after_image : item.before_image} alt={item.title} />
        <div className={styles.toggle}>
          <button
            className={showAfter ? styles.inactive : styles.active}
            onClick={() => setShowAfter(false)}
          >
            До
          </button>
          <button
            className={showAfter ? styles.active : styles.inactive}
            onClick={() => setShowAfter(true)}
          >
            После
          </button>
        </div>
      </div>
      <div className={styles.body}>
        <h3>{item.title}</h3>
        {item.service_name && <span className={styles.service}>{item.service_name}</span>}
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default PortfolioCard