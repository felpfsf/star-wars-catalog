import { useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../services/Requests'
import Characters from '../components/Characters'

import styles from './Home.module.css'

const Home = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios
      .get(requests.requestAll)
      .then((response) => {
        setCharacters(response.data)
      })
  }, [])

  console.log(characters);
  return (
    <div className={styles.container__characters}>
      {characters.length < 0 && <img src='/assets/loading.gif' alt='loading' />}
      {characters.length > 0 &&
        characters.map((char) =>
          <Characters key={char.id} char={char} />
        )}
    </div>
  )
}

export default Home