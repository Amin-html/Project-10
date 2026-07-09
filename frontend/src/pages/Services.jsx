import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import api from '../api/axios'
import ServiceCard from '../components/ServiceCard'
import styles from './Services.module.scss'

const CATEGORIES = [
  { value: '', label: 'Все' },
  { value: 'engine', label: 'Двигатель' },
  { value: 'body', label: 'Кузов' },
  { value: 'interior', label: 'Салон' },
  { value: 'suspension', label: 'Подвеска' },
  { value: 'exhaust', label: 'Выхлоп' },
  { value: 'wheels', label: 'Диски и шины' },
]

function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams()
  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [query, setQuery] = useState(searchParams.get('q') || '')

  useEffect(() => {
    setLoading(true)
    const params = {}
    if (category) params.category = category
    if (query) params.q = query
    setSearchParams(params)

    api.get('/services/', { params })
      .then(res => setServices(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [category, query])

  return (
    <div className={`container ${styles.page}`}>
      <aside className={styles.filters}>
        <h3>Категории</h3>
        <div className={styles.categoryList}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.value}
              className={category === cat.value ? `${styles.categoryBtn} ${styles.active}` : styles.categoryBtn}
              onClick={() => setCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className={styles.search}>
          <label>Поиск</label>
          <input
            type="text"
            placeholder="Название услуги..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </aside>

      <main className={styles.grid}>
        {loading ? (
          <p>Загрузка...</p>
        ) : services.length === 0 ? (
          <p>Ничего не найдено</p>
        ) : (
          services.map(service => <ServiceCard key={service.id} service={service} />)
        )}
      </main>
    </div>
  )
}

export default Services