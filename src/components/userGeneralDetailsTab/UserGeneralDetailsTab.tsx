import "./userGeneralDetailsTab.scss";
import { UserInterface } from "../../Types";

type Props = {
  userDetails: UserInterface | undefined;
};
const UserGeneralDetailsTab = ({ userDetails }: Props) => {
  return (
    <div className="tab-container">
      <div className="tab-card">
        <div className="card-details">
          <section className="tab-section">
            <h2 className="tab-header">Personal Information</h2>
            <ul>
              <li>
                <h4>Full Name</h4>
                <p>{userDetails?.userName}</p>
              </li>
              <li>
                <h4>Phone Number</h4>
                <p>{userDetails?.phoneNumber}</p>
              </li>
              <li>
                <h4>Email Address</h4>
                <p>{userDetails?.email}</p>
              </li>
              <li>
                <h4>BVN</h4>
                <p>{userDetails?.profile.bvn}</p>
              </li>
              <li>
                <h4>Gender</h4>
                <p>{userDetails?.profile.gender}</p>
              </li>
              <li>
                <h4>Marital Status</h4>
                <p>Single</p>
              </li>
              <li>
                <h4>Children</h4>
                <p>None</p>
              </li>
              <li>
                <h4>Type of Residence</h4>
                <p>Parent Apartment</p>
              </li>
            </ul>
          </section>

          <section className="tab-section">
            <h2 className="tab-header">Education and Employment</h2>
            <ul>
              <li>
                <h4>Level of Education</h4>
                <p>{userDetails?.education.level}</p>
              </li>
              <li>
                <h4>Employment Status</h4>
                <p>{userDetails?.education.employmentStatus}</p>
              </li>
              <li>
                <h4>Sector of Employment</h4>
                <p>{userDetails?.education.sector}</p>
              </li>
              <li>
                <h4>Duration of Employment</h4>
                <p>{userDetails?.education.duration}</p>
              </li>
              <li>
                <h4>Office Email</h4>
                <p>{userDetails?.education.officeEmail}</p>
              </li>
              <li>
                <h4>Monthly Income</h4>
                <p>{userDetails?.education.monthlyIncome}</p>
              </li>
              <li>
                <h4>Loan Repayment</h4>
                <p>{userDetails?.education.loanRepayment}</p>
              </li>
            </ul>
          </section>
          <section className="tab-section">
            <h2 className="tab-header">Socials</h2>
            <ul>
              <li>
                <h4>Twitter</h4>
                <p>{userDetails?.socials.twitter}</p>
              </li>
              <li>
                <h4>Facebook</h4>
                <p>{userDetails?.socials.facebook}</p>
              </li>
              <li>
                <h4>Instagram</h4>
                <p>{userDetails?.socials.instagram}</p>
              </li>
            </ul>
          </section>
          <section className="tab-section">
            <h2 className="tab-header">Guarantor</h2>
            <ul>
              <li>
                <h4>Full Name</h4>
                <p>
                  {userDetails?.guarantor.firstName}

                  {userDetails?.guarantor.lastName}
                </p>
              </li>
              <li>
                <h4>Phone Number</h4>
                <p>{userDetails?.guarantor.phoneNumber}</p>
              </li>
              <li>
                <h4>Email Address</h4>
                <p>{userDetails?.guarantor.address}</p>
              </li>
              <li>
                <h4>Relationship</h4>
                <p>{userDetails?.guarantor.gender}</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserGeneralDetailsTab;
