import socialIcon from "../../assets/images1/green-light-copy-4.png"
import "./search_card.scss"

interface Props {
  query: any | undefined
  handleSearch: (index: number, category: string) => void
}

export default function SearchCard(props: Props) {

  return (
    <ul className="search__card">
      {props?.query?.result
        ? props.query.result.slice(0, 4).map((q: any, index: number) => (
            <li onClick={() => props.handleSearch(index, q.categories[0] ?? "notknown")}>
              <img src={socialIcon} alt="" className="seach__card-img" />
              <p className="search__card_text">{q.categories[0]} Joke: {q.value.slice(0, 20)}...</p>
            </li>
          ))
        : []}
    </ul>
  )
}
  