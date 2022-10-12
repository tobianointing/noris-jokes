import React, { useEffect, useState } from "react"
import "./index.scss"
import Categories from "./sections/Categories/Categories"
import Footer from "./sections/Footer/Footer"
import Header from "./sections/Header/Header"
import Hero from "./sections/Hero/Hero"
import Jokes from "./sections/Jokes/Jokes"
import SingleJoke from "./sections/SingleJoke/SingleJoke"
import { useFetchData } from "./hooks/useFetchData"
import { JokeType } from "./types"

function App() {
  const [categorizedJokes, setCategorizedJokes] = useState<any>()
  const [selectedCategory, setSelectedCategory] = useState("money")
  const [jokeId, setJokeId] = useState<number | undefined>(undefined)

  const { data: allJokes, isLoading: isLoadingAllJokes } = useFetchData("search?query=all")
  const { data: categories, isLoading: isLoadingCategories } = useFetchData("categories")

  useEffect(() => {
    let jokes: any

    if (allJokes && categories) {
      categories.forEach((element: any) => {
        const cat = allJokes.result.filter((d: any) => element === d.categories[0])
        jokes = { ...jokes, [element]: cat }
      })

      const cat2 = allJokes.result.filter((d: any) => d.categories.length === 0)
      jokes = { ...jokes, notknown: cat2 }
    }

    setCategorizedJokes(jokes)
  }, [allJokes, categories])

  let selectCategoryData: JokeType[] | null = null

  if (categorizedJokes) {
    selectCategoryData = categorizedJokes[selectedCategory]
  }

  let singleJoke: JokeType | null = null

  if (jokeId !== undefined) {
    singleJoke = categorizedJokes[selectedCategory][jokeId]
  }

  const handleNext = () => {
    setJokeId((prevState) => {
      if (prevState !== undefined && prevState < categorizedJokes[selectedCategory].length - 1) {
        return prevState + 1
      } else {
        return prevState
      }
    })
  }

  const handlePrev = () => {
    setJokeId((prevState) => {
      if (prevState !== undefined && prevState > 0) {
        return prevState - 1
      } else {
        return prevState
      }
    })
  }

  const handleSearch = (index: number, category: string) => {
    setSelectedCategory(category)
    setJokeId(index)
  }

  return (
    <div className="container">
      <Header />
      <Hero handleSearch={handleSearch} />
      {jokeId === undefined && (
        <Categories
          categories={categories ? [...categories, "unknown"] : null}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      {jokeId === undefined && (
        <Jokes
          data={selectCategoryData ? selectCategoryData : null}
          setJokeId={setJokeId}
          selectedCategory={selectedCategory}
        />
      )}
      {jokeId !== undefined && (
        <SingleJoke
          joke={singleJoke}
          onClick={() => setJokeId(undefined)}
          handleNext={handleNext}
          handlePrev={handlePrev}
          index={jokeId}
        />
      )}
      <Footer />
    </div>
  )
}

export default App
