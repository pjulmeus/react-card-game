// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Card = ({deckId}) => {
//    const [cards, setCard] = useState(null)

//     useEffect(()=>{
//         async function drawCard(){
//             const draw = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
//             const res = draw.data.cards[0]
//             console.log(res)
//             setCard(res)
//             console.log(cards)
//         }
//         drawCard()
//         } , [deckId])

// return(
//     <>
//    <h1>{deckId}</h1>
//     <img src={cards.image} alt={cards.suit}/>
//     </>
      
// )
// } 

// export default Card