import styles from './OrderStatus.module.scss'

const STATUS_LABELS = {
  pending: 'Ожидает',
  confirmed: 'Подтверждён',
  in_progress: 'В работе',
  completed: 'Готово',
  cancelled: 'Отменён',
}

function OrderStatus({ status }) {
  return (
    <span className={`${styles.badge} ${styles[status]}`}>
      {STATUS_LABELS[status] || status}
    </span>
  )
}

export default OrderStatus