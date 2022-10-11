import React from 'react'

import "./paginationbtn.scss"

interface Props {
    text: string
    icon: string
    isPrev: boolean
    onClick?: () => void
}

export default function PaginationBtn(props: Props) {
  return (
    <div className={`pagi_btn ${props.isPrev ? "transverse" : ""}`} onClick={props.onClick}>
        <p>{props.text}</p>
        <img src={props.icon} alt="" />
    </div>
  )
}