import React from 'react';

const Stars = ({ rating }) => {

  const roundedRating = rating ? Math.round(rating.rate) : 0;

  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          style={{ color: index < roundedRating ? 'gold' : 'gray' }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Stars;
