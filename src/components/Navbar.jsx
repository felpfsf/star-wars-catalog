import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.header__container}>
      <Link to={'/'}>
        <img className={styles.logoImg} src='/assets/sw_logo.png' alt='logo'/>
      </Link>
      <h1>An API Test</h1>
    </div>
  )
}

export default Navbar