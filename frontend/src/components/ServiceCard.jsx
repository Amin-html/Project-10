import { Link } from 'react-router-dom'
import styles from './ServiceCard.module.scss'

function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.id}`} className={styles.card}>
      <img src={service.image} alt={service.name} />
      <div className={styles.body}>
        <span className={styles.category}>{service.category}</span>
        <h3>{service.name}</h3>
        <div className={styles.meta}>
          <span>{service.duration_days} дн.</span>
        </div>
        <p className={styles.price}>{service.price.toLocaleString()} $</p>
      </div>
    </Link>
  )
}

export default ServiceCard