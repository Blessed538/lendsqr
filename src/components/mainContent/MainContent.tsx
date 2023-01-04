import React, { useState } from "react";
import "./maincontent.scss";
import { dashboardCard } from "../../utils/data";
import Card from "../card/Card";
import DashboardTable from "../dashboardTable";
import Pagination from "../pagination/Pagination";
const MainContent = () => {
  const [cards] = useState(dashboardCard);
  return (
    <div className="main-container">
      <h2>Users</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      <DashboardTable />
      {/* <Pagination /> */}
    </div>
  );
};

export default MainContent;
