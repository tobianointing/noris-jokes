import React from "react"
import "./btn_link.scss"
import forwardArrow from "../../assets/images1/path-copy.png"


type Props = {}

export default function BtnLink({}: Props) {
  return (
    <div className="btn__link">
      <p className="btn__link_text">SEE STATS</p>
      <img className="btn__img" src={forwardArrow} alt="" />
    </div>
  )
}
