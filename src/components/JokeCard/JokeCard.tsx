import React from "react"
import BtnLink from "../BtnLink/BtnLink"
import "./joke_card.scss"
import socialIcon from "../../assets/images1/green-light-copy-4.png"


type Props = {}

export default function JokeCard({}: Props) {
  return (
    <div className="joke_card_wrapper">
      <div className="header">
    <img src={socialIcon} alt="" />
        <h2 className="title">Police Joke</h2>
      </div>

      <div className="body">
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam
        blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
        Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit
        sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi
        at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci
        amet laborum. Perspiciatis
      </div>

      <div className="footer">
        <BtnLink />
      </div>
    </div>
  )
}
