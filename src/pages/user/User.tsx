import "./user.scss";
import { ReactComponent as BackIcon } from "../../images/backbtn.svg";
import UserDetails from "../../components/userDetails/UserDetails";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  return (
    <div className="user-container">
      <div className="back-container" onClick={() => navigate(-1)}>
        <BackIcon />
        <span>Back to Users</span>
      </div>
      <div className="userdetails-header">
        <div className="user-details">User Details</div>
        <div className="userdetails-btn-container">
          <button className="blacklist-btn">BlackList User</button>
          <button className="activate-btn">Activate User</button>
        </div>
      </div>

      <UserDetails />
    </div>
  );
};

export default User;
