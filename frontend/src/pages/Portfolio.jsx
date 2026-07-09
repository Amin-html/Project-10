import { useEffect, useState } from 'react'
import api from '../api/axios'
import PortfolioCard from '../components/PortfolioCard'
import styles from './Portfolio.module.scss'

function Portfolio() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/portfolio/')
      .then(res => setItems(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="container">
      <h1 className={styles.title}>Наши работы</h1>
      {loading ? (
        <p>Загрузка...</p>
      ) : items.length === 0 ? (
        <p>Портфолио пока пусто</p>
      ) : (
        <div className={styles.grid}>
          {items.map(item => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Portfolio