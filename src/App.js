import { useState } from "react";

function App() {
  let [dadJoke, setDadJoke] = useState("This is a dad joke");

  let getDadJoke = async () => {
    let response = await fetch(
      "https://api.api-ninjas.com/v1/dadjokes?limit=1",
      {
        method: "GET",
        headers: { "x-api-key": "QgE8WQv4+gZfs87KSWN3yA==fVEa3IiYV9onHw9X" },
      }
    );
    let data = await response.json();
    let joke = data[0];
    setDadJoke(joke.joke);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={"string"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={getDadJoke}>TEST</button>
        <p>{dadJoke}</p>
      </header>
    </div>
  );
}

export default App;
