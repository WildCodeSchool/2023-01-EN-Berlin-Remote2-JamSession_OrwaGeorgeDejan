import animalsToAdopt from "../api/data";
import Card from "./Card";

const App = () => (
  <>
    <h1>Adopt a Cat</h1>
    <div className="deck">
      {animalsToAdopt.map((object) => (
        <Card name={object.name} picture={object.picture} />
      ))}
    </div>
  </>
);

export default App;
