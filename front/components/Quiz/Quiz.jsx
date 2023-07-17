import "./Quiz.css"

function Quiz() {
    return (
     <div className="App">
        {/* 1. Header*/ }
        <h1>MusicMatch</h1>

        {/* 2. Question Card */}
        <div className="question-card">
            <h2>Question _ of _</h2>
            <h3 className="question-text">¿Que comida te apetece hoy?</h3>

            <ul>
                <li className="list">Pizza</li>
                <li className="list">Burguer</li>
                <li className="list">Bocata de Calamares</li>
            </ul>
        </div>

        {/*3. Playlist */}

        <div className="playlist">
            <h1>Esta es tu playlist!!!</h1>
            <h2>enlace a la playlist</h2>
            <button>Ir a la playlist</button>

        </div>

     </div>
    )
  }
  
  export default Quiz;

