import "./category_card.scss"

interface Props {
    title: string
    onClick: () => void
    color: string
}

export default function CategoryCard(props: Props){
    return (
        <div className="category__card" onClick={props.onClick} style={{backgroundColor: props.color }}>
            {props.title} Jokes
        </div>
    )
}