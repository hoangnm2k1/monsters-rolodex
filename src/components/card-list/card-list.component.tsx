import Card from "../card/card.component";
import "./card-list.styles.jsx";
import { Monster } from "../../App";
import { CardListContainer } from "./card-list.styles";

type CardListProps = {
  monsters: Monster[];
};
const CardList = ({ monsters }: CardListProps) => (
  <CardListContainer>
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </CardListContainer>
);

export default CardList;
