import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import requests from '../services/Requests'
import { useEffect, useState } from 'react'

import styles from './Details.module.css'
import { TbArrowBack } from 'react-icons/tb'

const Details = () => {

  const { id } = useParams()
  const [char, setChar] = useState(null)

  useEffect(() => {
    axios.get(`${requests.requestChar}/${id}.json`).then((res) => {
      setChar(res.data)
    })
  }, [])

  console.log(char);

  return (
    <div className={styles.char__detail}>
      <Link to={'/'}>
        <TbArrowBack color='gold' size={32} />
      </Link>
      {char &&
        <>
          <div className={styles.char__detail__card}>
            <div className={styles.char__img__container}>
              <img src={char.image} alt={char.name} />
            </div>
            <div className={styles.char__bio}>
              <h2 className={styles.char__bio__name}>{char.name}</h2>
              <h3>Bio:</h3>
              <div>
                <p>{char.homeworld}</p>
                {char.species == 'human' && <p>{Math.abs(`${char.born}`)} B.B.Y.</p>}
                {char.species == 'human' && <p>{char.died} A.B.Y.</p>}
                <a href={char.wiki} target="_blank" rel="noopener noreferrer">Wiki</a>
              </div>
              {char.apprentices && char.apprentices.length > 0 &&
                <>
                  <p>Apprentice(s)</p>
                  <ul>
                    {char.apprentices.map((apprentice) =>
                      <li key={apprentice}>{apprentice}</li>
                    )}
                  </ul>
                </>
              }

              {char.affiliations.length > 0 &&
                <>
                  <p>Affiliation(s)</p>
                  <ul>
                    {char.affiliations.map((affiliation) =>
                      <li key={affiliation}>{affiliation}</li>
                    )}
                  </ul>
                </>
              }
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default Details