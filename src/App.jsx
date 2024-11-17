import { useState } from 'react'
import Cards from './components/Cards/Cards.jsx'

function App() {


  return (
    <>
    
    <Cards username = "Zimal" 
    imgSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    title="Freelance Web Designer"
    point="2k"
    comments="10k"
    messages="50"
    btn ="Follow"
    />


    <Cards username = "Kashan"
    imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPyQurJr6ZSIDdxB74C5s9w54oky3Wwq7ei1FbDYrneUc8KI&s"
    title="Freelance Programmer"
    point="4k"
    comments="20k"
    messages="100"
    btn ="Requested"
    
    />

    </>
  )
}

export default App
