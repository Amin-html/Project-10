import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import styles from './Navbar.module.scss'

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>Tuning Atelier</Link>
        <div className={styles.links}>
          <Link to="/services">Услуги</Link>
          <Link to="/portfolio">Портфолио</Link>
          <Link to="/profile">Профиль</Link>
          {isAuthenticated ? (
            <button className={styles.logoutBtn} onClick={handleLogout}>Выйти</button>
          ) : (
            <Link to="/login">Войти</Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar