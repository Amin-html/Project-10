import { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../api/axios'
import { AuthContext } from '../context/AuthContext'
import styles from './ServiceDetail.module.scss'

function ServiceDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isAuthenticated } = useContext(AuthContext)
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    api.get(`/services/${id}/`)
      .then(res => setService(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [id])

  const handleOrder = () => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    navigate(`/order/${id}`)
  }

  if (loading) return <p className="container">Загрузка...</p>
  if (!service) return <p className="container">Услуга не найдена</p>

  return (
    <div className={`container ${styles.detail}`}>
      <img src={service.image} alt={service.name} className={styles.image} />
      <div className={styles.info}>
        <span className={styles.category}>{service.category}</span>
        <h1>{service.name}</h1>
        <p className={styles.price}>{service.price.toLocaleString()} $</p>
        <p className={styles.duration}>Срок выполнения: {service.duration_days} дн.</p>
        <p className={styles.description}>{service.description}</p>
        <button className="btn" onClick={handleOrder}>Заказать услугу</button>
      </div>
    </div>
  )
}

export default ServiceDetail