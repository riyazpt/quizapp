import React from 'react'
import ImgUrl from '../assets/quiz-logo.png'

function Header() {
  return (
    <header>
      <img src={ImgUrl} />
      <h1>Quiz App</h1>
    </header>
  );
}

export default Header