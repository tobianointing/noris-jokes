import socialIcon from "../../assets/images1/green-light-copy-4.png"
import "./search_card.scss"

export default function SearchCard() {
  return (
    <ul className="search__card">
      <li>
        {" "}
        <img src={socialIcon} alt="" className="seach__card-img" />
        <p className="search__card_text">Social Jokes: The Crazy teacher</p>
      </li>
      <li>
        <img src={socialIcon} alt="" className="seach__card-img" />{" "}
        <p className="search__card_text">Social Jokes: The Crazy teacher</p>
      </li>
      <li>
        <img src={socialIcon} alt="" className="seach__card-img" />{" "}
        <p className="search__card_text">Social Jokes: The Crazy teacher</p>
      </li>
      <li>
        <img src={socialIcon} alt="" className="seach__card-img" />{" "}
        <p className="search__card_text">Social Jokes: The Crazy teacher</p>
      </li>
    </ul>
  )
}
