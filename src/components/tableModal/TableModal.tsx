import React, { ReactNode } from "react";
import viewDetails from "../../images/viewDetails.svg";
import blackList from "../../images/blackusers.svg";
import activeUsers from "../../images/activateUser.svg";
import "./tablemodal.scss";

interface ModalType {
  isOpen: boolean;
  toggle: () => void;
}
const TableModal = (props: ModalType) => {
  const { isOpen, toggle } = props;
  console.log("isOpen", isOpen);
  return (
    <>
      {isOpen ? (
        <div className="modal-container">
          <div className="modal-box">
            <ul>
              {ModalDetails.map((item, index) => (
                <li key={index}>
                  <img src={item.icon} />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TableModal;

const ModalDetails = [
  {
    icon: viewDetails,
    title: "View Details",
  },
  {
    icon: blackList,
    title: "Blacklist User",
  },
  {
    icon: activeUsers,
    title: "Activate User",
  },
];
