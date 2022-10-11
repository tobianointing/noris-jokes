import "./viewallcard.scss"
import downarrow from "../../assets/images1/path-copy-7.png"

import React from "react"

type Props = {
  onClick?: () => void
}

export default function ViewAllCard(props: Props) {
  return (
    <div className="view_all__card" onClick={props.onClick}>
      <img className="view_all_i=_icon" src={downarrow} alt="" />
      <p className="view_all__text">VIEW ALL</p>
    </div>
  )
}
