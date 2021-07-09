import React from 'react'
import './header.css'

function Header() {
  const darkMode = {
    body: document.querySelector('body'),
    on() {
      darkMode.body.classList.add('active')
    },
    off() {
      darkMode.body.classList.remove('active')
    }
  }

  return (
    <header className="header">
      <nav className="nav">
        <h1>GitHub Profiles</h1>
        <div className="dark">
          <i className="fas fa-moon" id="dark" onClick={darkMode.on}></i>
        </div>
        <div className="sun">
          <i className="fas fa-sun" id="sun" onClick={darkMode.off}></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
