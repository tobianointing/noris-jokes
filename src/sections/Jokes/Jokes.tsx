import React from "react"
import CategoryPill from "../../components/CategoryPill/CategoryPill"
import JokeCard from "../../components/JokeCard/JokeCard"
import "./jokes.scss"

type Props = {}

export default function Jokes({}: Props) {
  return (
    <section className="jokes__wrapper">
      <div className="jokes_cards__wrapper">
        <CategoryPill />

        <div className="cards">
          <JokeCard />
          <JokeCard />
          <JokeCard />
        </div>
      </div>
    </section>
  )
}
