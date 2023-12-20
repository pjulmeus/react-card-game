
import React , {useEffect, useState, useRef}from "react";
// import Card from "./card";
import axios from "axios";

const CardGame = () => {

const [deckId, setDeckId] = useState(null)
const [drawn, setDrawn] = useState([])

const btnRef = useRef() 
useEffect(() => {
async function shuffleDeck () {
    const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/")
    setDeckId(res.data.deck_id)
}
    shuffleDeck()
}, [])

async function reshuffleDeck () {
    const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/")
    setDeckId(res.data.deck_id)
}

async function drawCard(){
    try {
    const draw = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    if (draw.data.remaining === 0) {
        alert("Hey deck is empty")
        setDrawn([])
        reshuffleDeck()
    }
    const res = draw.data.cards[0]
    // if (res.remaining) === 0 return "Sorry it's empty" 
    setDrawn(d => [... d, {
        name: res.suit + " " + res.value,
        image: res.image,
    } ])
    console.log(res)
    } catch (error) {
        return 
    }
    }

console.log("Hello, this is ", drawn)

btnRef.current = function (){
    console.log("Yes, the ref drew")
    drawCard()
}

return (
    <>
    <button onClick={btnRef.current}> Give me another card!</button>
    <h1>{deckId}</h1>
       {drawn.map(d => <img src={d.image} alt={d.suit}/>)}
    </>
)

}

export default CardGame
