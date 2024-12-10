import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  axios
    .get("/api/jokes")
    .then((response) => {
      setJokes(response.data)
    })
    .catch((err) => {
      console.log("Error ocuuered", err);
    });

  return (
    <>
      <h2>Jokes</h2>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}> {joke.joke} </li>
        ))}
      </ul>
    </>
  );
}

export default App;
