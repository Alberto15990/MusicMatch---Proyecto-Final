import React, { useState } from "react";
import "./Quiz.css"

function Quiz() {

    //Porpierties

    const [ showPlaylist, setShowPlaylist ] = useState(false)
    const [ currentQuestion, setCurrentQuestion ] = useState(0)


    //FUNCTIONS

    const optionClicked = (isCorrect) =>{
        /*if (isCorrect) {
            setCurrentQuestion(currentQuestion + 1)
        }*/
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
        }else{
            setShowPlaylist(true)
        }
    }

    //Questions 

    const questions =[
        {
            text: "¿Que te apetece comer?",
            options: [
                { id: "italian", text: "Pizza" ,isCorrect: true},
                { id: "american", text: "Burger", isCorrect: true},
                { id: "spanish", text: "Bocata de Calamares", isCorrect: true},
                
            ],
        },
        {
            text: "¿Que estas haciendo en este momento?",
            options: [
                { id: "a", text: "Estudiando" , isCorrect: true},
                { id: "b", text: "Trabajando", isCorrect: true},
                { id: "c", text: "Ninguna de las anteriores, quiero fiesta!!!", isCorrect: true},
                
            ],
        },
        {
            text: "¿Cuantos sois?",
            options: [
                { id: "1", text: "Estoy solo, no tengo amigos...",isCorrect: true},
                { id: "2", text: "Yo y mi amig@",isCorrect: true},
                { id: "3", text: "Un monton!!! no puedo contarlos a todos",isCorrect: true},
                
            ]
        }
    ]

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
                                <li onClick={()=> optionClicked(option.isCorrect)} key={option.id} className="list">{option.text}</li>
                            )
                           })}
                        </ul>
                    </div>
                )}
        </div>
    )
}

export default Quiz;

