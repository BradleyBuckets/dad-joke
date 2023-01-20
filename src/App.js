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
      <button onClick={getDadJoke}>TEST</button>
      <p>{dadJoke}</p>
    </div>
  );
}

export default App;
