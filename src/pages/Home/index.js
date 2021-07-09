import React, { useState } from 'react'
import Status from '../../components/card'
import Header from '../../components/Header'
import axios from 'axios'
import './Home.css'

function Home() {
  const [usuario, setUsuario] = useState('')
  const [avatar, setAvatar] = useState({})
  const [error, setError] = useState(false)

  function getUser() {
    axios
      .get(`https://api.github.com/users/${usuario}`)
      .then(response => {
        if (usuario !== undefined) {
          const profile = response.data
          setAvatar(profile)
          document.querySelector('.container_perfil').classList.add('active')
          setError(false)
        } else {
          setError(true)
        }
      })
      .catch(error => {
        setError(true)
        document.querySelector('.container_perfil').classList.remove('active')
      })
  }
  return (
    <>
      <Header />
      <section className="main">
        <div className="input_container">
          <input
            type="text"
            value={usuario}
            placeholder="UserName"
            onChange={event => setUsuario(event.target.value)}
          />
          <button onClick={getUser}>Buscar</button>
        </div>
        {error ? <p className="error">Usuário não encontrado.</p> : ''}
        <Status user={avatar} />
      </section>
    </>
  )
}

export default Home
