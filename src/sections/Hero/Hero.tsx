import "./hero.scss"

import SearchCard from "../../components/SearchCard/SearchCard"

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">The Joke Bible</h1>
      <p className="hero__small_text"> Daily Laugh for you and yours</p>

      <div className="search__wrapper">
        <input type="text" name="" id="" placeholder="How can we make you laugh today?" />
        <SearchCard />
      </div>
    </section>
  )
}
