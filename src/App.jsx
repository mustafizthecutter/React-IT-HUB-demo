import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {

  const actors = ['montu', 'jontu', 'tinku', 'chuppu', 'dilaram', 'temba', 'bavuma', 'nimsi', 'samaruk'];

  const singers = [{ name: 'mustafiz', age: 56 },
  { name: 'tahsan', age: 22 },
  { name: 'humusona', age: 47 },
  { name: 'mamoni', age: 12 },
  ];

  const books = [{ id: 1, name: 'math', price: 120 }, { id: 2, name: 'physics', price: 220 }, { id: 3, name: 'chemistry', price: 320 }, { id: 4, name: 'biology', price: 420 },]

  return (
    <>

      <h3>Vite + React</h3>
      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>
        )
      }

      <Actor name={"Bappa Raaz"}></Actor>

      {
        actors.map(actor => <Actor name={actor}></Actor>
        )
      }

      {/* <ToDo
        task="Learn React"
        isDone={true}></ToDo>
      <ToDo
        task="Core Concepts"
        isDone={false}></ToDo>
      <ToDo
        task="Try JSX"
        isDone={true}></ToDo> */}
      {/* <Device name="laptop" price="55"></Device>
      <Device name="charger" price="59"></Device>
      <Device name="battery" price="30"></Device>
      <Person></Person>
      <Student grade="9" score="12"></Student>
      <Student grade={10} score="89"></Student>
      <Student grade={78} score={28}></Student>
      <Developer></Developer> */}
    </>
  )
}
function Device(props) {
  // console.log(props)
  return (
    <div> <h2>this is: {props.name} and the price is {props.price} </h2></div>
  )
}
function Person() {
  const age = 52;
  const occupation = "Student"
  const person = { name: 'mustafiz', id: '2135' }
  return <h1>I am {person.name}.I am a {occupation}. I am {age} years old. And my id is {person.id}</h1>
}
function Student({ grade = 20, score = 0 }) {
  // console.log(grade, score)
  return (
    <div className='student'>
      <h3>Class: {grade}</h3>
      <p>Score {score}</p>
    </div>
  )
}
function Developer() {

  return (
    <div style={{
      margin: '20px',
      padding: '20px',
      border: '2px solid purple',
      borderRadius: '20px'
    }}>
      <h2>Deva Deva</h2>
      <p>Coding done</p>
    </div>
  )
}

export default App
