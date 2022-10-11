import React from "react"
import "./btn_link.scss"
import forwardArrow from "../../assets/images1/path.png"

interface Props {
  text: string
  onClick?: () => void
}

export default function BtnLink(props: Props) {
  return (
    <div className="btn__link" onClick={props.onClick}>
      <p className="btn__link_text">{props.text}</p>
      <img className="btn__img" src={forwardArrow} alt="forwardbtn" />
    </div>
  )
}
