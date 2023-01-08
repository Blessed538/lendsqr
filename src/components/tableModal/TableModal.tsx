import { Link } from "react-router-dom";
import viewDetails from "../../images/viewDetails.svg";
import blackList from "../../images/blackusers.svg";
import activeUsers from "../../images/activateUser.svg";
import "./tablemodal.scss";

interface ModalType {
  isOpen: boolean;
  // toggle: () => void;
  userId: string;
}
const TableModal = (props: ModalType) => {
  const { isOpen, userId } = props;

  return (
    <>
      {isOpen && (
        <div className="modal-container">
          <div className="modal-box">
            <ul>
              <>
                <li>
                  <Link to={`/users/${userId}`}>
                    <img src={viewDetails} />
                    <span>View Details</span>
                  </Link>
                </li>
                <li>
                  <img src={blackList} />
                  <span>Blacklist User</span>
                </li>
                <li>
                  <img src={activeUsers} />
                  <span>Activate User</span>
                </li>
              </>
            </ul>
          </div>
        </div>
      )}
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
