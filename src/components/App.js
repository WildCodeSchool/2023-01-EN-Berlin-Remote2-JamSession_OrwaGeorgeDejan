import { useState } from "react";

import animalsToAdopt from "../api/data";
import Card from "./Card";
import { getRandomName, getRandomImageUrl } from "../api/wrapper";

const App = () => {
  const [data, setData] = useState(animalsToAdopt); 

  

  function addRandomCard() {
    setData((oldData) => oldData.concat(
        {
          name: getRandomName(),
          picture: getRandomImageUrl(),
        }
    ));
  }

  function removeCard() {
    setData((oldData) => oldData.slice(1))
  }

  return (
    <>
      <h1>Adopt a Cat</h1>
      <button onClick={addRandomCard}>Add random kitten</button>
      <button onClick={removeCard} >Remove first kitten</button>
      <div className="deck">
        {data.map((object) => (
          <Card name={object.name} picture={object.picture} />
        ))}
      </div>
    </>
  );
};

export default App;
