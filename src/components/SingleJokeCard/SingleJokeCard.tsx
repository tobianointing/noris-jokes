import React from "react"
import CategoryPill from "../CategoryPill/CategoryPill"
import "./single_joke_card.scss"
import orangLight from "../../assets/images2/orange-light.png"
import { JokeType } from "../../types"

interface Props {
  joke: JokeType | null
  index: number
}

export default function SingleJokeCard(props: Props) {
  return (
    <div className="single_joke__card">
      <div className="single_joke__card_header">
        <CategoryPill text={props.joke?.categories[0] ?? ""} icon={orangLight} />
        <div className="status">
          <div className="dot"></div>
          <div className="status_text">TRENDING</div>
        </div>
      </div>

      <div className="title">
        <h1 className="title__text">{props.joke?.categories[0] ?? "unknown"}</h1>
        <div className="line"></div>
        <p className="position">NO #{props.index + 1}</p>
      </div>

      <p className="body">
        {props?.joke?.value ?? ""}
      </p>
    </div>
  )
}
