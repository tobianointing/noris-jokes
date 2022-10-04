import React from "react"
import "./index.scss"
import Categories from "./sections/Categories/Categories"
import Navbar from "./sections/Header/Header"
import Hero from "./sections/Hero/Hero"
import Jokes from "./sections/Jokes/Jokes"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Categories />
      <Jokes />
    </div>
  )
}

export default App
