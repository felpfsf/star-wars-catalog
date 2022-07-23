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
              <div className={styles.char__bio__status}>
                <p>Homeworld: <span>{char.homeworld}</span></p>
                {char.species != 'droid' ?
                  <p>Born in:
                    <span>{Math.abs(`${char.born}`)} B.B.Y.</span>
                    <span>{char.bornLocation}</span>
                  </p>
                  :
                  <p>Created in:
                    <span>{Math.abs(`${char.dateCreated}`)} B.B.Y.</span>
                    <span>{char.dateDestroyed}</span>
                  </p>

                }
                {char.species != 'droid' && char.died != null &&
                  <p>Died in:
                    <span>{char.died} A.B.Y.</span>
                    <span>{char.diedLocation}</span>
                  </p>
                }
              </div>
              <h3>Bio:</h3>
              <a href={char.wiki} target="_blank" rel="noopener noreferrer">Wiki</a>
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