const Card = (props) => {
  return (
    <div className="card">
      <h4>{props.name}</h4>
      <img src={props.picture} alt={props.name}></img>
    </div>
  );
};

export default Card;
