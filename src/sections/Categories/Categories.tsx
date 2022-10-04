import CategoryCard from "../../components/CategoryCard/CategoryCard"
import ViewAllCard from "../../components/ViewAllCard/ViewAllCard"
import "./categories.scss"

export default function Categories() {
  return (
    <div className="category__wrapper">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <ViewAllCard/>
    </div>
  )
}
