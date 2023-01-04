import React from "react";
import "./card.scss";
type Props = {
  card: {
    title: string;
    icon: string;
    stats: string;
  };
};
const Card = ({ card: { title, icon, stats } }: Props) => {
  return (
    <div className="card-container">
      <>
        <img alt="" src={icon} />
        <h2>{title}</h2>
        <h4>{stats}</h4>
      </>
    </div>
  );
};

export default Card;
