import { useState } from "react";
import "./sidebar.scss";
import { ReactComponent as Briefcase } from "../../images/briefcase.svg";
import { ReactComponent as Dropdown } from "../../images/dropdown.svg";
import { ReactComponent as HomeIcon } from "../../images/home.svg";
import dashboardData from "../../utils/data";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [items] = useState(dashboardData);

  return (
    <div className="sidebar-container">
      <div className="switch-org">
        <span>
          <Briefcase />
        </span>

        <h3>Switch Organization</h3>
        <span>
          <Dropdown />
        </span>
      </div>
      <div className="dashboard-link">
        <HomeIcon />
        <p>Dashboard</p>
      </div>

      {items.map((data, index) => (
        <>
          <h2 key={index}>{data.title}</h2>
          <ul>
            {data.items.map((item, index) => (
              <>
                <li key={index}>
                  <NavLink
                    to={`${item.link}`}
                    key={item.id}
                    end
                    className={({ isActive }) => (isActive ? "activenav" : "")}
                  >
                    <img src={item.icon} alt={item.title} />
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              </>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default Sidebar;
