import "./viewallcard.scss"
import downarrow from "../../assets/images1/path-copy-7.png"

import React from "react"

type Props = {}

export default function ViewAllCard({}: Props) {
  return (
    <div className="view_all__card">
        <img className="view_all_i=_icon" src={downarrow} alt="" />
      <p className="view_all__text">VIEW ALL</p>
    </div>
  )
}
