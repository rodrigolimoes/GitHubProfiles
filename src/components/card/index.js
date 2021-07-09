import React from 'react'
import './card.css'

function Status(props) {
  const {
    avatar_url,
    followers,
    name,
    public_repos,
    location,
    following,
    login,
    html_url
  } = props.user
  return (
    <div className="container_perfil">
      <div className="container_avatar">
        <img src={avatar_url} alt="Profile Avatar" />
      </div>
      <div className="grid">
        <h2>{name || login}</h2>
        <span>Localização: {location || 'Não informado'}</span>
        <span>Seguindo: {following}</span>
        <span>Seguidores: {followers}</span>
        <span>Repositorios Publicos: {public_repos}</span>
        <a className="button" href={html_url} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  )
}

export default Status
