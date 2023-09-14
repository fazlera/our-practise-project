import React from "react";
import PropTypes from "prop-types";

const Card = ({ card, handleButton }) => {
  console.log(card);
  const { image, name, title, company, salary } = card;
  return (
    <div>
      <div className="w-2/4">
        
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="h-60 "
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{salary}</p>
            <div className="card-actions justify-end">
              <button onClick={() => handleButton(card)} className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
