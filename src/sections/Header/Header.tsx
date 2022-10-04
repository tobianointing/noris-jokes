import React from "react"
import DropDown from "../../components/DropDown/DropDown"
import "./header.scss"

export default function Navbar() {
  return (
    <header>
      <nav>
        <a href="#ofjojes" className="nav-link">
          SO FUNKTIONIERT'S
        </a>
        <a href="#jokes" className="nav-link">
          SANDERANGEBOTE
        </a>

        <DropDown />
      </nav>
    </header>
  )
}
