import React, { ChangeEvent, useContext, useMemo, useState } from "react";
import "./table.scss";
import { ReactComponent as FilterIcon } from "../../images/filterbutton.svg";
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
  const { users, isLoading, currentItems } = useContext(UserContext);
  const [currentID, setCurrentID] = useState("");
  const [currentFilterID, setCurrentFilterID] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTab(e.target.value);
  };

  const status = ["Active", "Inactive", "Blacklisted", "Pending"];

  const closeModal = (e: any) => {
    toggleFilter();
    e.stopPropagation();
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="table-container">
        <div className="table-responsive">
          {isLoading ? (
            <Loader />
          ) : (
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

              <tbody onClick={closeModal}>
                <>
                  {currentItems &&
                    currentItems.map((user) => {
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
                              {dayjs(user.createdAt).format(
                                "MMM D, YYYY h:mm A"
                              )}
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
          )}
        </div>
      </div>

      <Pagination itemsPerPage={10} />
    </div>
  );
};
export default DashboardTable;

function Loader() {
  return (
    <div className="loader-container">
      <h2>Please wait!! User's details is loading...</h2>
    </div>
  );
}
