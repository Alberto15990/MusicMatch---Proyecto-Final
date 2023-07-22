import React, { useState } from "react";
import "./Quiz.css"
import { questions } from "../../../constants";

function Quiz() {

    //Porpierties

    const [ showPlaylist, setShowPlaylist ] = useState(false)
    const [ currentQuestion, setCurrentQuestion ] = useState(0)
    const [ selectedAnswers , setSelectedAnswers] = useState({})

    //FUNCTIONS

    const optionClicked = (selectedOption) =>{
        setSelectedAnswers({...selectedAnswers, [currentQuestion]:selectedOption})
        console.log(selectedAnswers)
        if (currentQuestion +1 < questions.length) {
            setCurrentQuestion(currentQuestion +1 )
        }else{
            setShowPlaylist(true)
        }
    }
    

    //Questions 

    

    return (
        <div className="App">
            <h1>MusicMatch</h1>

            {showPlaylist ? (
                <div className="playlist">
                    <h1>Esta es tu playlist!!!</h1>
                    <h2>enlace a la playlist</h2>
                    <button>Ir a la playlist</button>

                </div>
            ) :(
                    <div className="question-card">
                        <h2>Question {currentQuestion + 1} of {questions.length}</h2>
                        <h3 className="question-text">{questions[currentQuestion].text}</h3>
                            
                        <ul>
                           {questions[currentQuestion].options.map((option) =>{
                            return (
                                <li onClick={()=> optionClicked(option.id)} key={option.id} className="list">{option.text}</li>
                            )

                           })}
                        </ul>
                    </div>
                )}
    
        </div>
    )
}


export default Quiz;

