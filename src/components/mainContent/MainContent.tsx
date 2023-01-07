import { useEffect, useState } from "react";
import "./maincontent.scss";
import { dashboardCard } from "../../utils/data";
import Card from "../card/Card";
import DashboardTable from "../dashboardTable";
import { UserInterface } from "../../Types";
import { Provider } from "../../context/UserContext";

const MainContent = () => {
  const [cards] = useState(dashboardCard);

  const [users, setUsers] = useState<UserInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setUsers(result);
          // setIsLoading(false);
        },
        (error) => {
          setIsLoading(true);
        }
      );
  }, []);

  return (
    <>
      <Provider value={{ users, isLoading }}>
        <div className="main-container">
          <h2>Users</h2>
          <div className="cards-container">
            {cards.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
          <DashboardTable />
        </div>
      </Provider>
    </>
  );
};

export default MainContent;
