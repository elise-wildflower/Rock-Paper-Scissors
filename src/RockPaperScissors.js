import React, { useEffect, useReducer, useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardMeta, Icon } from 'semantic-ui-react';

const RockPaperScissors = () => {
  const [winner, setWinner] = useState("")
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)
  const [ties, setTies] = useState(0)
  const [userChoice, setUserChoice] = useState("")
  const [compChoice, setCompChoice] = useState("")

  useEffect(() => {

  }, [ties, wins, losses])
 
  const getCompChoice = () => {
    let options = ["rock", "paper", "scissors"]
    let choice = options[Math.floor(Math.random()*options.length)]; 
    setCompChoice(choice)
  }

  const handleClick = (a) => {
    setUserChoice(a)
    getCompChoice()
    checkWinner(userChoice, compChoice)
  };

  const checkWinner = (uc, cc) => {
    if (uc === "rock" && cc === "rock") {
      setTies((ties) => ties + 1)
      setWinner("tie")
    } else if (uc === "rock" && cc === "scissors") {
      setWins((wins) => wins + 1)
      setWinner("You")
    } else if (uc === "rock" && cc === "paper") {
      setLosses((losses) => losses + 1)
      setWinner("Computer")
    } else if (uc === "scissors" && cc === "rock") {
      setLosses((losses) => losses + 1)
      setWinner("Computer")
    } else if (uc === "scissors" && cc === "scissors") {
      setTies((ties) => ties + 1)
      setWinner("tie")
    } else if (uc === "scissors" && cc === "paper") {
      setWins((wins) => wins + 1)
      setWinner("You")
    } else if (uc === "paper" && cc === "rock") {
      setWins((wins) => wins + 1)
      setWinner("You")
    } else if (uc === "paper" && cc === "scissors") {
      setLosses((losses) => losses + 1)
      setWinner("Computer")
    } else if (uc === "paper" && cc === "paper") {
      setTies((ties) => ties + 1)
      setWinner("tie")
    };
  };


  return (
    <div>
      <h1>You VS the Computer</h1>
      <p>Your Choice: {userChoice}</p>
      <p>
      <Icon  
      link name='hand rock'
      size ='huge' 
      onClick={() => handleClick("rock")}
      />
      <Icon 
      link name='hand paper' 
      size='huge' 
      onClick={() => handleClick("paper")}
      />
      <Icon 
      link name='hand scissors' 
      size='huge' 
      onClick={() => handleClick("scissors")}
      /> 
      </p>
      <p>Computer's Choice: {compChoice}</p>

      <Card>
        <CardContent>
        <CardHeader>Results</CardHeader>
        <p>Winner: {winner}</p>
        <CardMeta>
          Wins {wins}
          </CardMeta>
        <CardMeta>
          Losses {losses}
          </CardMeta>
        <CardMeta>
          Ties {ties}
          </CardMeta>
        </CardContent>
      </Card>

    </div>
  )
}

export default RockPaperScissors;
