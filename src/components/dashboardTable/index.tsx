import { useContext, useState } from "react";
import "./table.scss";
import { ReactComponent as FilterIcon } from "../../images/filterbutton.svg";

import { TableHeaders } from "../../utils/data";
import Pagination from "../pagination/Pagination";
import useModal from "../../hooks/useModal";
import OrganizationFilter from "../organizationFilter/OrganizationFilter";
import { UserContext } from "../../context/UserContext";
import TableBody from "../tableBody/TableBody";
import TableHeader from "../tableHeader/TableHeader";

const DashboardTable = () => {
  const [headers] = useState(TableHeaders);
  const { isLoading, currentItems } = useContext(UserContext);

  return (
    <div>
      <div className="table-container">
        <div className="table-responsive">
          {isLoading ? (
            <Loader />
          ) : (
            <table style={{ position: "relative" }}>
              <thead>
                {headers.map((data, index) => (
                  <TableHeader key={data.id} headers={data} />
                ))}
              </thead>

              <tbody>
                {currentItems &&
                  currentItems.map((user) => {
                    return <TableBody key={user.id} user={user} />;
                  })}
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
