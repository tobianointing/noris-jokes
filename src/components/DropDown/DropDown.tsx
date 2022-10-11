import React from "react"
import "./dropdown.scss"
import userIcon from "../../assets/images2/shape.png"
import path from "../../assets/images2/path.png"
import { useDisclosure } from "../../hooks/useDisclosure"

export default function DropDown() {
  const [isOpen, toggleOpen] = useDisclosure()

  return (
    <div className="dropdown__wrapper" onClick={toggleOpen}>
        <img src={userIcon} alt="" />
      <div className="dropdown__title">MEIN BEREICH</div>
      <img src={path} className="path__img" alt="" />
      <ul className={`dropdown__menu ${isOpen ? "drop_down__open" : ""}`}>
        <li>My publish jokes</li>
        <li>My saved jokes</li>
        <li>Account information</li>
        <li>Publish a joke</li>
      </ul>
    </div>
  )
}
