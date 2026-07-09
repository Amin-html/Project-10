import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../api/axios'
import styles from './OrderCreate.module.scss'

function OrderCreate() {
  const { id } = useParams() // id услуги, для которой оформляем заказ
  const navigate = useNavigate()
  const [service, setService] = useState(null)
  const [carModel, setCarModel] = useState('')
  const [comment, setComment] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    api.get(`/services/${id}/`)
      .then(res => setService(res.data))
      .catch(err => console.error(err))
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await api.post('/orders/', {
        service: id,
        car_model: carModel,
        comment,
      })
      // после успешного оформления — сразу в профиль смотреть историю заказов
      navigate('/profile')
    } catch (err) {
      setError('Не удалось оформить заказ. Проверьте данные и попробуйте снова.')
    } finally {
      setSubmitting(false)
    }
  }

  if (!service) return <p className="container">Загрузка...</p>

  return (
    <div className={`container ${styles.page}`}>
      <h1>Оформление заказа</h1>

      <div className={styles.summary}>
        <img src={service.image} alt={service.name} />
        <div>
          <h3>{service.name}</h3>
          <p className={styles.price}>{service.price.toLocaleString()} $</p>
          <p className={styles.duration}>Срок: {service.duration_days} дн.</p>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Марка и модель вашего авто
          <input
            type="text"
            placeholder="Например: BMW M5 F90"
            value={carModel}
            onChange={e => setCarModel(e.target.value)}
            required
          />
        </label>

        <label>
          Комментарий (необязательно)
          <textarea
            placeholder="Дополнительные пожелания..."
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
        </label>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className="btn" disabled={submitting}>
          {submitting ? 'Оформляем...' : 'Подтвердить заказ'}
        </button>
      </form>
    </div>
  )
}

export default OrderCreate