import React, { useState } from "react";
import "./sidebar.scss";
import dashboardData from "../../utils/data";

const Sidebar = () => {
  const [items] = useState(dashboardData);
  return (
    <div className="sidebar-container">
      <div className="align-sidebar">
        {items.map((data, index) => (
          <>
            <h2 key={index}>{data.title}</h2>
            <ul>
              {data.items.map((item, index) => (
                <>
                  <li key={index}>
                    <img src={item.icon} alt={item.title} />
                    <span>{item.title}</span>
                  </li>
                </>
              ))}
            </ul>
          </>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
