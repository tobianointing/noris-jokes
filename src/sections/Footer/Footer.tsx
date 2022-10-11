import React from 'react'
import BtnLink from '../../components/BtnLink/BtnLink'
import "./footer.scss"

type Props = {}

export default function Footer(props: Props) {
  return (
    <footer className='footer'>
        <h2 className="footer__text">
            GOT JOKES? GET PAID <br />
            FOR SUBMITING!
        </h2>
        <BtnLink text="SUMIT JOKE" />
    </footer>
  )
}