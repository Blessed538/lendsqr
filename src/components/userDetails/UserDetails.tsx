import "./userDetails.scss";
import { ReactComponent as FirstStartIcon } from "../../images/firststar.svg";
import { ReactComponent as SecondStartIcon } from "../../images/secondstar.svg";
import { ReactComponent as ThirdStartIcon } from "../../images/thirdstar.svg";
import ComingSoon from "../comingSoon/ComingSoon";
import { ChangeEvent, useEffect, useState } from "react";
import UserGeneralDetailsTab from "../userGeneralDetailsTab/UserGeneralDetailsTab";
import { UserInterface } from "../../Types";
import clsx from "clsx";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [currentTab, setCurrentTab] = useState("general");
  const [general, setGeneral] = useState("general");
  const [loans, setLoans] = useState("loans");
  const [document, setDocument] = useState("document");
  const [savings, setSavings] = useState("savings");
  const [system, setSystem] = useState("system");
  const [bankDetails, setBankDetails] = useState("bank");
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState<UserInterface>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    FetchUser();
  }, []);

  function FetchUser() {
    setIsLoading(true);
    fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setUserDetails(result);
          setIsLoading(false);
        },
        (error) => {
          console.log(error);
          setIsLoading(false);
        }
      );
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTab(e.target.value);
  };
  const showTab: any = {
    general: <UserGeneralDetailsTab userDetails={userDetails} />,
    loans: <ComingSoon currentTab={currentTab} />,
    system: <ComingSoon currentTab={currentTab} />,
    document: <ComingSoon currentTab={currentTab} />,
    savings: <ComingSoon currentTab={currentTab} />,
    bank: <ComingSoon currentTab={currentTab} />,
  };

  return (
    <>
      {isLoading ? (
        <UserLoader />
      ) : (
        <>
          <div className="user-details-container">
            <div className="bank-details-container">
              <div className="bank-details-content">
                <div className="details-header">
                  <img
                    src={userDetails?.profile.avatar}
                    alt={userDetails?.userName}
                  />
                  <div className="user-username">
                    <h2>{userDetails?.userName}</h2>
                    <p>{userDetails?.accountNumber}</p>
                  </div>
                  <div className="user-usertiers">
                    <h2>User's Tiers</h2>
                    <div className="stars-list">
                      <FirstStartIcon className="first-star" />
                      <SecondStartIcon className="second-star" />
                      <ThirdStartIcon className="third-star" />
                    </div>
                  </div>
                  <div className="amount-content">
                    <h2>₦{userDetails?.accountBalance}</h2>
                    <p>9912345678/Providus Bank</p>
                  </div>
                </div>

                <ul>
                  <li
                    className={clsx({
                      active: currentTab === "general",
                    })}
                  >
                    <label htmlFor="general">General Details</label>
                    <input
                      type="radio"
                      id="general"
                      name="currentTab"
                      value="general"
                      onChange={changeHandler}
                      defaultChecked
                    />
                  </li>
                  <li
                    className={clsx({
                      active: currentTab === "document",
                    })}
                  >
                    <label htmlFor="document">Documents</label>
                    <input
                      type="radio"
                      name="currentTab"
                      id="document"
                      value="document"
                      onChange={changeHandler}
                    />
                  </li>
                  <li
                    className={clsx({
                      active: currentTab === "bank",
                    })}
                  >
                    <label htmlFor="bank">Bank Details</label>
                    <input
                      type="radio"
                      id="bank"
                      name="currentTab"
                      value="bank"
                      onChange={changeHandler}
                    />
                  </li>
                  <li
                    className={clsx({
                      active: currentTab === "loans",
                    })}
                  >
                    <label htmlFor="loans">Loans</label>
                    <input
                      type="radio"
                      id="loans"
                      name="currentTab"
                      value="loans"
                      onChange={changeHandler}
                    />
                  </li>
                  <li
                    className={clsx({
                      active: currentTab === "savings",
                    })}
                  >
                    <label htmlFor="savings">Savings</label>
                    <input
                      type="radio"
                      id="savings"
                      name="currentTab"
                      value="savings"
                      onChange={changeHandler}
                      defaultChecked
                    />
                  </li>
                  <li
                    className={clsx({
                      active: currentTab === "system",
                    })}
                  >
                    <label htmlFor="system">App and System</label>
                    <input
                      type="radio"
                      id="system"
                      name="currentTab"
                      value="system"
                      onChange={changeHandler}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {showTab[currentTab]}
        </>
      )}
    </>
  );
};

export default UserDetails;

export function UserLoader() {
  return (
    <div className="loader-container">
      <h2> User Details is Loading....</h2>
    </div>
  );
}
