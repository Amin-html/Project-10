import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../api/axios'
import styles from './Home.module.scss'

function Home() {
  const [services, setServices] = useState([])
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    api.get('/services/').then(res => setServices(res.data.slice(0, 4)))
    api.get('/portfolio/').then(res => setPortfolio(res.data.slice(0, 3)))
  }, [])

  return (
    <div>
      <section className={`container ${styles.hero}`}>
        <h1>Тюнинг-ателье премиум класса</h1>
        <p>Двигатель, кузов, подвеска — доводим до совершенства</p>
        <Link to="/services" className="btn">Смотреть услуги</Link>
      </section>

      <section className="container">
        <h2 className={styles.sectionTitle}>Наши услуги</h2>
        <div className={styles.servicesGrid}>
          {services.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <img src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
              <p className={styles.price}>от {service.price.toLocaleString()} $</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <h2 className={styles.sectionTitle}>Наши работы</h2>
        <div className={styles.portfolioGrid}>
          {portfolio.map(item => (
            <div key={item.id} className={styles.portfolioCard}>
              <img src={item.after_image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home