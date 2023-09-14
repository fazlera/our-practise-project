import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card-box/Card";
import Calculate from "../Calculate/Calculate";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [getCards, setGetCards] = useState([]);
  const [cost, setCost] = useState(0);
  const [remaining, setRemaining ] = useState(150000);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  const handleButton = (cardItem) =>{
    let count = cardItem.salary
    const newCard = [...getCards,cardItem]
    const isExist = getCards.find(item => item.id === cardItem.id)
    if(isExist){
      return alert('already exist')
    }
    else{
        getCards.forEach(card => {
          count = count+ card.salary;
        })

        const remaining = 150000 - count;
        if(count >150000){
          return alert('short')
        }else{
          setRemaining(remaining);
          setCost(count)
          setGetCards(newCard)
        }


    }

  }
  return (
    
    <>
      <h1>hello {cards.length}</h1>

      <div className="flex justify-around">
      <div className="grid grid-cols-2 gap-5">
      {
        cards.map(card => <Card handleButton={handleButton} key={card.id} card={card}></Card>)
      }

      </div>
      <div>
        <Calculate cost={cost} remaining={remaining} getCards={getCards}></Calculate>
      </div>
      </div>
        
    </>
  );
};

Cards.propTypes = {};

export default Cards;
