import React, { useState } from "react"
import DropDown from "../../components/DropDown/DropDown"
import "./header.scss"
import closeBtn from "../../assets/images1/icon-close.svg"
import menuBtn from "../../assets/images1/icon-hamburger.svg"
import { useDisclosure } from "../../hooks/useDisclosure"

export default function Header() {
  const [isOpen, onOpen, onClose] = useDisclosure()
  

  return (
    <header>
      <nav>
        <img src={menuBtn} className="open_btn" alt="menuBtn" onClick={onOpen} />

        <div className={`main__link ${isOpen ? "open" : ""}`}>
          <img src={closeBtn} className="close_btn" alt="closebtn" onClick={onClose} />
          <a href="#ofjojes" className="nav-link">
            SO FUNKTIONIERT'S
          </a>
          <a href="#jokes" className="nav-link">
            SANDERANGEBOTE
          </a>
        </div>

        <DropDown />
      </nav>
    </header>
  )
}
