import React from "react"
import "./sidepanel.scss"

interface Props  {}

export default function SidePanel(props: Props) {
  return (
    <div className="side_panel">
      <h2 className="text">THE TOP 10 JOKES THIS WEEK</h2>
      <ul className="top_ten_list">
        <li className="top_ten_lit_item">
          <a href="#go">Smoking Joke 1</a>
        </li>
        <li className="top_ten_lit_item">
          <a href="#go">Smoking Joke 2</a>
        </li>
        <li className="top_ten_lit_item">
          <a href="#go">Smoking Joke 3</a>
        </li>
        <li className="top_ten_lit_item">
          <a href="#go">Smoking Joke 4</a>
        </li>
        <li className="top_ten_lit_item">
          <a href="#go">Smoking Joke 5</a>
        </li>
        <li className="top_ten_lit_item">
          <a href="#go">Smoking Joke 6</a>
        </li>
        <li className="top_ten_lit_item">
          <a href="#go">Smoking Joke 7</a>
        </li>
        <li className="top_ten_lit_item">
          <a href="#go">Smoking Joke 8</a>
        </li>
        <li className="top_ten_lit_item">
          <a href="#go">Smoking Joke 9</a>
        </li>
        <li className="top_ten_lit_item">
          <a href="#go">Smoking Joke 10</a>
        </li>
      </ul>
    </div>
  )
}
