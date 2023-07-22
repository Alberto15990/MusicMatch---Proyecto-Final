import React, { useState } from "react";
import "./Quiz.css"
import { questions } from "../../../constants";
import { usePlaylist } from "../../hooks/usePlaylist";



function Quiz() {

    //Porpierties

    const [ showPlaylist, setShowPlaylist ] = useState(false)
    const [ currentQuestion, setCurrentQuestion ] = useState(0)
    const [ selectedAnswers , setSelectedAnswers] = useState({})

    //FUNCTIONS

    const optionClicked = (selectedOption) =>{
        setSelectedAnswers({...selectedAnswers, [currentQuestion]:selectedOption})
    
        if (currentQuestion +1 < questions.length) {
            setCurrentQuestion(currentQuestion +1 )
        }else{
            setShowPlaylist(true);
        }
    }
    console.log('> selected answers: ' ,selectedAnswers)

    const {data, isLoading} = usePlaylist(selectedAnswers[0],selectedAnswers[1],selectedAnswers[2]) 

    console.log('>data: ', data)
    //Questions 

    

    return (
        <div className="background">
        <div className="App">
            <h1>MusicMatch</h1>

            {(showPlaylist && !isLoading)? (
                <div className="playlist">
                    <h1>Esta es tu playlist!!!</h1>
                    <h2>Nombre de la</h2>
                    <button><a href={`https://open.spotify.com/playlist/${data?.[0]?.playlist_id}`} target="_blank"> Go to playlist!! </a ></button>

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
        </div>
    )
}


export default Quiz;

