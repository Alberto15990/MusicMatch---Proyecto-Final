import React, { useState } from "react";
import { questions } from "../../constants";
import { usePlaylist } from "../../hooks";
import "./Quiz.css";

const Card = ({ current, next, pos, setAnswers, setPage }) => {
  const handleSelection = (id) => {
    setAnswers((answers) => [...answers, id]);
    next && setPage(next);
  };

  return (
    <div className="question-card">
      <h2>Question {pos + 1} of 3</h2>
      <h3 className="question-text">{questions[current].text}</h3>

      <ul>
        {questions[current].options.map((option) => {
          return (
            <li
              onClick={() => handleSelection(option.id)}
              key={option.id}
              className="list"
            >
              {option.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const PlaylistCard = ({ answers }) => {
  const { data, isLoading } = usePlaylist(...answers);

  return (
    <div className="playlist">
      <h2>Esta es tu playlist!!!</h2>
      {isLoading ? (
        <p>Cargando playlist...</p>
      ) : (
        <button>
          <a
            href={`https://open.spotify.com/playlist/${data?.playlist}`}
            target="_blank"
          >
            {" "}
            Go to playlist!!{" "}
          </a>
        </button>
      )}
    </div>
  );
};

const useStateMachine = (initPage = "food") => {
  const [current, setCurrent] = useState(initPage);

  const stateMachine = {
    food: {
      component: Card,
      next: "activity",
      prev: undefined,
      current: "food",
      pos: 0,
    },
    activity: {
      component: Card,
      next: "friends",
      prev: "food",
      current: "activity",
      pos: 1,
    },
    friends: {
      component: Card,
      next: "playlist",
      prev: "activity",
      current: "friends",
      pos: 2,
    },
    playlist: {
      component: PlaylistCard,
      next: undefined,
      prev: "friends",
      current: "playlist",
      pos: 3,
    },
  };

  return [stateMachine[current], setCurrent];
};

function Quiz() {
  const [answers, setAnswers] = useState([]);
  const [page, setPage] = useStateMachine();
  const { component: Component, ...rest } = page;

  return (
    <div className="background">
      <div className="App">
        <h1>MusicMatch</h1>

        <Component {...{ answers, setAnswers, setPage, ...rest }} />
      </div>
    </div>
  );
}

export default Quiz;
