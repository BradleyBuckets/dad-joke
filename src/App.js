import { useState } from "react";
import dad from "./dad.png";

function App() {
  let [dadJoke, setDadJoke] = useState([
    "Please click on my face for a dad joke!",
  ]);

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
    let string = joke.joke;
    let array = string
      .split("? ")
      .join("?*")
      .split(",")
      .join(",*")
      .split(". ")
      .join(".*")
      .split("*");
    setDadJoke(array);
  };

  return (
    <div className="App">
      <div className="button" onClick={getDadJoke}></div>
      <img src={dad} alt="cartoon dad" />
      <div className="container move">
        {dadJoke.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div className="out"></div>
      <div className="in"></div>
      <div className="cross one"></div>
      <div className="cross two"></div>
      <div className="cross three"></div>
      <div className="cross three"></div>
      <div className="cross four"></div>
      <div className="cross five"></div>
      <div className="cross six"></div>
      <div className="cross seven"></div>
      <div className="line"></div>
    </div>
  );
}

export default App;
