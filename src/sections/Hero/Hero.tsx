import "./hero.scss"

import SearchCard from "../../components/SearchCard/SearchCard"
import { useState } from "react"
import { useFetchData } from "../../hooks/useFetchData"

interface Props {
  handleSearch: (index: number, category: string) => void
}

export default function Hero(props: Props) {
  const [query, setQuery] = useState()
  const { data } = useFetchData(`search?query=${query}`, query)

  const handleSearchOnChange = (e: any) => {
    setQuery(e.target.value)
    
  }

  const handleSearch = (index: number, category: string) => {
    setQuery(undefined)
    props.handleSearch(index, category)
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
          onChange={handleSearchOnChange}
        />
        {query && <SearchCard query={data} handleSearch={handleSearch} />}
      </div>
    </section>
  )
}
