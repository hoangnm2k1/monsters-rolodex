import "./card.styles.jsx";
import { Monster } from "../../App";
import { CardContainer } from "./card.styles.jsx";

type CardProps = {
  monster: Monster;
};
const Card = ({ monster }: CardProps) => {
  const { id, email, name } = monster;

  return (
    <CardContainer>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </CardContainer>
  );
};

export default Card;
