import { useEffect, useState } from "react";
import initialCards from "../utils/data";

function useTable () {
  const [cards, setCards] = useState(initialCards);
  const [attempts, setAttempts] = useState(0);
  const [card1, setcard1] = useState(null);
  const [card2, setcard2] = useState(null);
  const [winner, setWinner] = useState(false);

  const handleSelect = (id, name) => {
    const newCards = cards.map(card => {
      if(card.name === name && card.id === id) {
        return {...card, state: "active"}
      } else {
        return card
      }
    })

    !card1 ? setcard1(id) : setcard2(id);

    setCards(newCards)
    setAttempts((attempts) => attempts +1)
  }

  const resetCards = () => {
    setcard1(null)
    setcard2(null)
    setAttempts(0)
  }

  const resetTable = () => {
    setCards(initialCards)
    setWinner(false)
  }

  const validateMatchCards = () => {
    const name1 = cards.filter(card => card.id === card1);
    const name2 = cards.filter(card => card.id === card2);

    let newCards = []

    if(name1[0].name === name2[0].name) {
      newCards = cards.map(card => {
        if(card.id === name1[0].id || card.id === name2[0].id) {
          return {...card, state: "completed"}
        } else {
          return card
        }
      })
    } else {
      newCards = cards.map(card => {
        if(card.state !== "completed") {
          return {...card, state: "unselected"}
        } else {
          return card
        }
      })
    }

    setTimeout(() => {
      setCards(newCards);
    }, 500);
  }

  const validateWin = () => {
    const uncompleteCards = cards.filter(card => card.state !== "completed" )

    uncompleteCards.length === 0 && setWinner(true)
  }

  useEffect(() => {
    validateWin();
  }, [cards])
  
  useEffect(() => {
    const newCards = [...cards];
    newCards.sort( ()=>  Math.random() - 0.5);

    setCards(newCards)
  }, [winner])
  

  useEffect(() => {
    if (attempts === 2) {
      validateMatchCards();

      resetCards();
    }
  
  }, [attempts])

  return {
    winner,
    resetCards,
    resetTable,
    cards,
    handleSelect
  }
}

export default useTable