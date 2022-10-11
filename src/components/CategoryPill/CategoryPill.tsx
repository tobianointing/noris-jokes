import React from "react"
import "./category_pill.scss"

type Props = {
  text: string
  icon?: string
}

export default function CategoryPill(props: Props) {
  return (
    <div className="category_pill_wrapper">
      {props.icon && <img className="cat_pill_img" src={props.icon} alt="" />}
      {props.text} Jokes
    </div>
  )
}
