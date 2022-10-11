import React, { useEffect, useState } from "react"
import "./index.scss"
import Categories from "./sections/Categories/Categories"
import Footer from "./sections/Footer/Footer"
import Header from "./sections/Header/Header"
import Hero from "./sections/Hero/Hero"
import Jokes from "./sections/Jokes/Jokes"
import SingleJoke from "./sections/SingleJoke/SingleJoke"
import { useFetchData } from "./hooks/useFetchData"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { JokeType } from "./types"

const queryClient = new QueryClient()

function App() {
  const [categorizedJokes, setCategorizedJokes] = useState<any>()
  const [selectedCategory, setSelectedCategory] = useState("money")
  const [jokeId, setJokeId] = useState<string | null>(null)

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

  if (jokeId) {
    singleJoke = categorizedJokes[selectedCategory].find((joke:any) => joke.id === jokeId)
  }


  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Header />
        <Hero />
        {!jokeId && (
          <Categories
            categories={categories ? [...categories, "unknown"] : null}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        {!jokeId && (
          <Jokes data={selectCategoryData ? selectCategoryData : null} setJokeId={setJokeId} selectedCategory={selectedCategory} />
        )}
        {jokeId && <SingleJoke joke={singleJoke}  onClick={() => setJokeId(null)}/>}
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App
