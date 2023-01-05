import React, { ChangeEvent, useContext, useMemo, useState } from "react";
import "./table.scss";
import { ReactComponent as FilterIcon } from "../../images/filterbutton.svg";
import menu from "../../images/menu.png";
import { ReactComponent as MenuIcon } from "../../images/tablemenu.svg";
import { TableHeaders } from "../../utils/data";
import Pagination from "../pagination/Pagination";
import useModal from "../../hooks/useModal";
import TableModal from "../tableModal/TableModal";
import OrganizationFilter from "../organizationFilter/OrganizationFilter";
import { UserContext } from "../../context/UserContext";
import dayjs from "dayjs";
import clsx from "clsx";
const DashboardTable = () => {
  const { isOpen: openFilter, toggle: toggleFilter } = useModal();
  const { isOpen: openModal, toggle: toggleModal } = useModal();
  const [headers] = useState(TableHeaders);
  const [currentTab, setCurrentTab] = useState("one");
  const { users } = useContext(UserContext);
  const [currentID, setCurrentID] = useState("");
  const [currentFilterID, setCurrentFilterID] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTab(e.target.value);
  };

  const status = ["Active", "Inactive", "Blacklisted", "Pending"];

  return (
    <div style={{ position: "relative" }}>
      <div className="table-container">
        <div className="table-responsive">
          <table style={{ position: "relative" }}>
            <thead>
              {headers.map((data, index) => (
                <>
                  <th key={index}>
                    <OrganizationFilter
                      isOpen={currentFilterID === data.id}
                      toggle={toggleFilter}
                    />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                    >
                      <p>{data.title}</p>
                      <span>
                        <img
                          src={data.Icon}
                          alt={data.alt}
                          onClick={() => setCurrentFilterID(data.id)}
                        />
                      </span>
                    </div>
                  </th>
                </>
              ))}
            </thead>

            <tbody onClick={toggleFilter}>
              <>
                {users.map((user) => {
                  const rand = Math.floor(Math.random() * status.length);
                  return (
                    <>
                      <TableModal
                        isOpen={currentID === user.id}
                        toggle={toggleModal}
                        userId={user.id}
                      />
                      <tr key={user.id}>
                        <td>{user.orgName}</td>
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>
                          {dayjs(user.createdAt).format("MMM D, YYYY h:mm A")}
                        </td>
                        <td>
                          <div
                            className={clsx({
                              active: status[rand] === "Active",
                              inactive: status[rand] === "Inactive",
                              pending: status[rand] === "Pending",
                              blacklist: status[rand] === "Blacklisted",
                            })}
                          >
                            {status[rand]}
                          </div>
                        </td>
                        <td onClick={() => setCurrentID(user.id)}>
                          <button>
                            <MenuIcon />
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </>
            </tbody>
          </table>
        </div>
      </div>

      <Pagination itemsPerPage={10} total={200} />
    </div>
  );
};
export default DashboardTable;

{
  /* <label htmlFor="one">I am One</label>
      <label htmlFor="two">I am Two</label>
      <label htmlFor="three">I am Three</label>
      <label htmlFor="four">I am Four</label>
      <label htmlFor="five">I am Five</label>
      <input
        type="radio"
        placeholder="Radio input"
        name="tabs"
        id="one"
        value="one"
        onChange={changeHandler}
        defaultChecked
      />
      <input
        type="radio"
        placeholder="Radio input"
        name="tabs"
        id="two"
        onChange={changeHandler}
        value="two"
      />
      <input
        type="radio"
        placeholder="Radio input"
        name="tabs"
        id="three"
        onChange={changeHandler}
        value="three"
      />
      <input
        type="radio"
        placeholder="Radio input"
        name="tabs"
        id="four"
        onChange={changeHandler}
        value="four"
      />
      <input
        type="radio"
        placeholder="Radio input"
        name="tabs"
        id="five"
        onChange={changeHandler}
        value="five"
      />
    </div> */
}
