import CategoryCard from "../../components/CategoryCard/CategoryCard"
import ViewAllCard from "../../components/ViewAllCard/ViewAllCard"
import "./categories.scss"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { useState } from "react"
import randomColor from 'randomcolor'



interface Props {
  categories: string[] | null
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function Categories(props: Props) {
  const [count, setCount] = useState(4)

  const colors = randomColor({
    count: props.categories?.length ?? 10,
    luminosity: 'dark'
  });



  return (
    <section className="category__wrapper">
      {!props.categories
        ? [...Array(4)].map((a) => <Skeleton height={"50px"} />)
        : props.categories
            ?.slice(0, count)
            .map((cat, index) => (
              <CategoryCard key={index} title={cat} onClick={() => props.setSelectedCategory(cat)} color={colors[index]} />
            ))}

      <ViewAllCard onClick={() => setCount(props.categories?.length ?? 4)} />
    </section>
  )
}
