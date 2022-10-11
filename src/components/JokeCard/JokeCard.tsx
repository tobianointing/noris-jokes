import React from "react"
import BtnLink from "../BtnLink/BtnLink"
import "./joke_card.scss"
import socialIcon from "../../assets/images1/green-light-copy-4.png"
import { JokeType } from "../../types"

type Props = {
  joke: JokeType
  setJokeId: React.Dispatch<string|null>
}

export default function JokeCard(props: Props) {
  const truncateString = (string = '', maxLength = 500) => 
  string.length > maxLength 
    ? `${string.substring(0, maxLength)}…`
    : string

  return (
    <div className="joke_card_wrapper">
      <div className="joke__card_header">
        <img src={socialIcon} alt="" />
        <h2 className="title">{props.joke.categories[0]} JOKE</h2>
      </div>

      <div className="joke__card_body">
        {truncateString(props.joke.value)}
      </div>

      <div className="joke__card_footer">
        <BtnLink text={"SEE STATS"} onClick={() => props.setJokeId(props.joke.id)} />
      </div>
    </div>
  )
}
