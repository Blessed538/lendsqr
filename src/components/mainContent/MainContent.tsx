import { useEffect, useState } from "react";
import "./maincontent.scss";
import { dashboardCard } from "../../utils/data";
import Card from "../card/Card";
import DashboardTable from "../dashboardTable";
import { UserInterface } from "../../Types";
import { Provider } from "../../context/UserContext";

const MainContent = () => {
  const [cards] = useState(dashboardCard);
  const [total, settotal] = useState(200);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(total / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  let setValue;

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`)
      .then((res) => res.json())
      .then(
        (result) => {
          setValue = localStorage.setItem("usersList", JSON.stringify(result));
          setUsers(result);

          setIsLoading(false);
        },
        (error) => {
          setIsLoading(true);
        }
      );
  }, []);

  return (
    <>
      <Provider value={{ users, currentItems,pageCount,handlePageClick, isLoading, total, itemsPerPage }}>
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
