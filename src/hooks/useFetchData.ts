import React, { useEffect, useState } from "react"

export const useFetchData = (query: string, state?: string) => {
  const [data, setData] = useState<any>()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const res = await fetch(`https://api.chucknorris.io/jokes/${query ? query : ""}`)
      const data = await res.json()

      if (data.errors) {
        setIsError(true)
      }

      setData(data)
      setIsLoading(false)
    }

    fetchData()
  }, [state])

  return { data, isError, isLoading }
}
