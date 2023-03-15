import people from '../data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import { useState } from 'react'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const peopleLength = people.length

  const prevPerson = () => {
    const prevIndex = index == 0 ? peopleLength - 1 : index - 1
    setIndex(prevIndex)
  }

  const nextPerson = () => {
    const nextIndex = (index + 1) % peopleLength
    setIndex(nextIndex)
  }

  const randomPerson = () => {
    const randomIndex = Math.floor(Math.random() * peopleLength)
    setIndex(randomIndex)
  }

  return (
    <article className="review">
      <div>
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          surprise me
        </button>
      </div>
    </article>
  )
}

export default Review
