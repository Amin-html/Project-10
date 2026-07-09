import { useEffect, useState } from 'react'
import api from '../api/axios'
import OrderStatus from '../components/OrderStatus'
import styles from './Profile.module.scss'

function Profile() {
  const [profile, setProfile] = useState(null)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      api.get('/profile/'),
      api.get('/orders/my/'),
    ])
      .then(([profileRes, ordersRes]) => {
        setProfile(profileRes.data)
        setOrders(ordersRes.data)
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className="container">Загрузка...</p>
  if (!profile) return <p className="container">Не удалось загрузить профиль</p>

  return (
    <div className={`container ${styles.page}`}>
      <h1>Профиль</h1>

      <div className={styles.card}>
        <p><span>Имя пользователя</span>{profile.username}</p>
        <p><span>Email</span>{profile.email || '—'}</p>
        <p><span>Телефон</span>{profile.phone || '—'}</p>
      </div>

      <h2>История заказов</h2>
      {orders.length === 0 ? (
        <p className={styles.empty}>У вас пока нет заказов</p>
      ) : (
        <div className={styles.orders}>
          {orders.map(order => (
            <div key={order.id} className={styles.orderItem}>
              <div className={styles.orderHeader}>
                <h3>{order.service_name}</h3>
                <OrderStatus status={order.status} />
              </div>
              <p className={styles.orderMeta}>
                {order.car_model} · {order.total_price.toLocaleString()} $ · {new Date(order.created_at).toLocaleDateString()}
              </p>
              {order.comment && <p className={styles.orderComment}>{order.comment}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Profile