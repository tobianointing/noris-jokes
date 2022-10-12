import React, { useState } from "react"
import Skeleton from "react-loading-skeleton"
import CategoryPill from "../../components/CategoryPill/CategoryPill"
import JokeCard from "../../components/JokeCard/JokeCard"
import ViewAllCard from "../../components/ViewAllCard/ViewAllCard"
import "./jokes.scss"
import { JokeType } from "../../types"

type Props = {
  data: JokeType[] | null
  setJokeId: React.Dispatch<React.SetStateAction<number | undefined>>
  selectedCategory: string
}

export default function Jokes(props: Props) {
  const [count, setCount] = useState(6)

  return (
    <section className="jokes__wrapper">
      <div className="jokes_cards__wrapper">
        <CategoryPill text={props.selectedCategory} />

        <div className="cards">
          {props?.data
            ? props.data
                .slice(0, count)
                .map((joke: any, index) => (
                  <JokeCard joke={joke} key={joke.id} index={index} setJokeId={props.setJokeId} />
                ))
            : [...Array(4)].map((joke: any, index) => <Skeleton key={index} height={300} />)}
        </div>

        <div className="more__btn">
          <ViewAllCard onClick={() => setCount(props?.data?.length ?? 4)} />
        </div>
      </div>
    </section>
  )
}
