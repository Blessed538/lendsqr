import React, { ChangeEvent, useMemo, useState } from "react";
import "./table.scss";
import { ReactComponent as FilterIcon } from "../../images/filterbutton.svg";
import menu from "../../images/menu.png";
import { TableHeaders } from "../../utils/data";
import Pagination from "../pagination/Pagination";
import useModal from "../../hooks/useModal";
import TableModal from "../tableModal/TableModal";

const DashboardTable = () => {
  const { isOpen, toggle } = useModal();
  const [headers] = useState(TableHeaders);
  const [currentTab, setCurrentTab] = useState("one");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTab(e.target.value);
  };

  console.log("currentTab", currentTab);
  return (
    <>
      <div className="table-container">
        <div className="table-responsive">
          <table>
            <thead>
              {headers.map((data, index) => (
                <>
                  <th key={index}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                    >
                      <p>{data.title}</p>
                      <span>
                        <img src={data.Icon} alt={data.alt} />
                      </span>
                    </div>
                  </th>
                </>
              ))}
            </thead>
            <tbody>
              <tr>
                <td>Lendsqr</td>
                <td>Adedeji</td>
                <td>adedeji@lendsqr.com</td>
                <td>08078903721</td>
                <td>May 15, 2020 10:00 AM</td>
                <td>
                  <button>Inactive</button>
                </td>
                <td>
                  <img src={menu} alt="menu" />
                </td>
              </tr>
              <tr>
                <td>Lendsqr</td>
                <td>Adedeji</td>
                <td>adedeji@lendsqr.com</td>
                <td>08078903721</td>
                <td>May 15, 2020 10:00 AM</td>
                <td>
                  <button>Inactive</button>
                </td>
                <td>
                  <img src={menu} alt="menu" />
                </td>
              </tr>
              <tr>
                <td>Lendsqr</td>
                <td>Adedeji</td>
                <td>adedeji@lendsqr.com</td>
                <td>08078903721</td>
                <td>May 15, 2020 10:00 AM</td>
                <td>
                  <button>Inactive</button>
                </td>
                <td>
                  <img src={menu} alt="menu" />
                </td>
              </tr>
              <tr>
                <td>Lendsqr</td>
                <td>Adedeji</td>
                <td>adedeji@lendsqr.com</td>
                <td>08078903721</td>
                <td>May 15, 2020 10:00 AM</td>
                <td>
                  <button>Inactive</button>
                </td>
                <td>
                  <img src={menu} alt="menu" />
                </td>
              </tr>
              <tr>
                <td>Lendsqr</td>
                <td>Adedeji</td>
                <td>adedeji@lendsqr.com</td>
                <td>08078903721</td>
                <td>May 15, 2020 10:00 AM</td>
                <td>
                  <button>Inactive</button>
                </td>
                <td>
                  <img src={menu} alt="menu" />
                </td>
              </tr>
              <tr>
                <td>Lendsqr</td>
                <td>Adedeji</td>
                <td>adedeji@lendsqr.com</td>
                <td>08078903721</td>
                <td>May 15, 2020 10:00 AM</td>
                <td>
                  <button>Inactive</button>
                </td>
                <td>
                  <img src={menu} alt="menu" />
                </td>
              </tr>
              <tr>
                <td>Lendsqr</td>
                <td>Adedeji</td>
                <td>adedeji@lendsqr.com</td>
                <td>08078903721</td>
                <td>May 15, 2020 10:00 AM</td>
                <td>
                  <button>Inactive</button>
                </td>
                <td>
                  <img src={menu} alt="menu" />
                </td>
              </tr>
              <tr>
                <td>Lendsqr</td>
                <td>Adedeji</td>
                <td>adedeji@lendsqr.com</td>
                <td>08078903721</td>
                <td>May 15, 2020 10:00 AM</td>
                <td>
                  <button>Inactive</button>
                </td>
                <td>
                  <img src={menu} alt="menu" />
                </td>
              </tr>
              <tr>
                <td>Lendsqr</td>
                <td>Adedeji</td>
                <td>adedeji@lendsqr.com</td>
                <td>08078903721</td>
                <td>May 15, 2020 10:00 AM</td>
                <td>
                  <button>Inactive</button>
                </td>
                <td onClick={() => toggle()}>
                  {/* <div onClick={() => toggle()} style={{ cursor: "pointer" }}> */}
                  <TableModal isOpen={isOpen} toggle={toggle} />
                  <img src={menu} alt="menu" />
                  {/* </div> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Pagination itemsPerPage={10} total={200} />
    </>
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
