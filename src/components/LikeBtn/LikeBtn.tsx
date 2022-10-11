import React from "react"
import "./likebtn.scss"

interface Props {
  icon: string
  count: number
  isLike: boolean
  setCount: () => void
}

export default function LikeBtn(props: Props) {
  return (
    <div className="like_btn" onClick={props.setCount}>
      <div className={`icon__wrapper ${props.isLike ? "weird-green" : "smooth-red"}`}>
        <img className="like_btn__icon" src={props.icon} alt="icon" />
      </div>
      <p className={`like_btn__text ${props.isLike ? "text-green" : "text-red"}`}>{props.count}</p>
    </div>
  )
}
