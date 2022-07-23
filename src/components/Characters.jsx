import { Link } from 'react-router-dom'
import styles from './Characters.module.css'

const Characters = ({ char }) => {
  return (

    <>
      <Link className={styles.char__details} to={`/${char.id}`}>
        <div className={styles.container__char}>
          <div className={styles.container__charImg}>
            <img className={styles.charImg} src={char.image} alt={char.name} />
          </div>
          <h2>{char.name}</h2>
        </div>
      </Link>
    </>
  )
}

export default Characters