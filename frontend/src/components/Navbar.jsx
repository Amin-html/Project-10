import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>Tuning Atelier</Link>
        <div className={styles.links}>
          <Link to="/services">Услуги</Link>
          <Link to="/portfolio">Портфолио</Link>
          <Link to="/profile">Профиль</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar