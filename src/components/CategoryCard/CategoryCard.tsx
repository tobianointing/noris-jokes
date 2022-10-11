import "./category_card.scss"

interface Props {
    title: string
    onClick: () => void
}

export default function CategoryCard(props: Props){
    return (
        <div className="category__card" onClick={props.onClick}>
            {props.title} Jokes
        </div>
    )
}