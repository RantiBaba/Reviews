import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index]; //* index is the current person in the people array.

  const nextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1;
      return newIndex > people.length - 1 ? 0 : newIndex; //* if the index is greater than the length of the people array, then return 0, otherwise return the newIndex.
    });
  };

  const prevPerson = () => {
    setIndex(index => {
      let newIndex = index - 1;
      return newIndex < 0 ? people.length - 1 : newIndex; //* if the index is less than 0, then return the last index of the people array, otherwise return the newIndex.
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length); //* generate a random number between 0 and the length of the people array.
    console.log(randomNumber);

    if (randomNumber === index) {
      randomNumber = index + 1; //* if the random number is equal to the current index, then increment the random number by 1.

      if (randomNumber > people.length - 1) {
        //* if the random number is greater than the length of the people array, then set the random number to 0.
        randomNumber = 0;
      }
    }
    setIndex(randomNumber); //* set the index to the random number.
  };

  return (
    <article className="review" data-testid="article">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author" data-testid="author">
        {name}
      </h4>
      <p className="job" data-testid="job">
        {job}
      </p>
      <p className="info" data-testid="info">
        {text}
      </p>
      <div className="button-container">
        <button className="prev-btn" data-testid="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" data-testid="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" data-testid="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
