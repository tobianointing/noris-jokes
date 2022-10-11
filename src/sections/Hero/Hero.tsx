import "./hero.scss"

import SearchCard from "../../components/SearchCard/SearchCard"
import { useState } from "react"
import { useFetchData } from "../../hooks/useFetchData"

export default function Hero() {
  const [query, setQuery] = useState()
  const { data } = useFetchData(`search?query=${query}`, query)

  const handleSearch = (e: any) => {
    setQuery(e.target.value)
    console.log(e.target.value)
  }

  
  return (
    <section className="hero">
      <h1 className="hero__title">The Joke Bible</h1>
      <p className="hero__small_text"> Daily Laugh for you and yours</p>

      <div className="search__wrapper">
        <input
          type="text"
          name=""
          id=""
          placeholder="How can we make you laugh today?"
          onChange={handleSearch}
        />
       {query && <SearchCard query={data}/>}
      </div>
    </section>
  )
}
