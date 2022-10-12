import React, { useState } from "react"
import "./single_joke.scss"
import arrowLeft from "../../assets/images2/arrow-left.png"
import likeIcon from "../../assets/images2/hand.png"
import dislikeIcon from "../../assets/images2/hand-copy.png"
import SingleJokeCard from "../../components/SingleJokeCard/SingleJokeCard"
import PaginationBtn from "../../components/PaginationBtn/PaginationBtn"
import LikeBtn from "../../components/LikeBtn/LikeBtn"
import nextBtn from "../../assets/images2/arrow-left-copy.png"
import prevBtn from "../../assets/images2/arrow-left-copy-2.png"
import SidePanel from "../../components/SidePanel/SidePanel"
import { JokeType } from "../../types"

interface Props {
  joke: JokeType | null
  onClick: () => void
  handleNext: () => void
  handlePrev: () => void
  index: number| null
}

export default function SingleJoke(props: Props) {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  

  
  return (
    <section className="singe_joke">
      <nav className="single_joke__nav">
        <div className="back__btn_wrapper" onClick={props.onClick}>
          <img src={arrowLeft} alt="arrow" />
        </div>
      </nav>

      <div className="single_joke_main">
        <div className="card_wrapper">
          <SingleJokeCard joke={props.joke} index={props.index ?? 0} />

          <div className="card_footer">
            <div className="like_btn__wrapper">
              <LikeBtn icon={likeIcon} count={likes} isLike={true} setCount={() => setLikes(prevState => prevState + 1)} />
              <LikeBtn icon={dislikeIcon} count={dislikes} isLike={false}   setCount={() => setDislikes(prevState => prevState + 1)} />
            </div>

            <div className="pagi__wrapper">
              <PaginationBtn text="PREV JOKE" icon={prevBtn} isPrev={true} onClick={props.handlePrev} />
              <PaginationBtn text="NEXT JOKE" icon={nextBtn} isPrev={false} onClick={props.handleNext} />
            </div>
          </div>
        </div>

        <SidePanel />
      </div>
    </section>
  )
}
