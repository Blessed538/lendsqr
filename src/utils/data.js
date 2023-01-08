import UserFriends from "../images/user-friends.svg";
import UserTimes from "../images/user-times.svg";
import Slack from "../images/sack.svg";
import Handshake from "../images/handshake.svg";
import Savings from "../images/piggy-bank.svg";
import WhiteList from "../images/user-check.svg";
import FirstCard from "../images/firstcard.svg";
import ActiveUsers from "../images/activeUsers.svg";
import UserLoans from "../images/userLoans.svg";
import UserSaving from "../images/userSavings.svg";
import Audits from "../images/clipboard-list.svg";
import Badge from "../images/badge-percent.png";
import Slider from "../images/sliders-h.svg";
import Org from "../images/organization.svg";
import loanProduct from "../images/LoanProduct.svg";
import SavingProduct from "../images/SavingProduct.svg";
import Report from "../images/report.svg";
import Settlement from "../images/settlement.svg";
import ServiceAccount from "../images/serviceAcct.svg";
import Services from "../images/services.svg";
import Transactions from "../images/transactions.svg";
import Fees from "../images/feecharges.svg";
import { ReactComponent as FilterIcon } from "../images/filterbutton.svg";
import FilterIcons from "../images/filterbutton.svg";
const dashboard = [
  {
    title: "CUSTOMERS",
    items: [
      {
        icon: UserFriends,
        title: "Users",
        id: "1",
        link: "/users",
      },
      {
        icon: UserTimes,
        id: "2",
        title: "Guarantors",
        link: "/guarantor",
      },
      {
        icon: Slack,
        id: "3",
        link: "/slack",
        title: "Loans",
      },

      {
        icon: Handshake,
        id: "4",
        title: "Decisions Models",
        link: "/decision",
      },
      {
        icon: Savings,
        id: "5",
        title: "Savings",
        link: "/savings",
      },
      {
        icon: Slack,
        id: "6",
        title: "Loan Requests",
        link: "/loans request",
      },
      {
        icon: WhiteList,
        title: "Whitelist",
        link: "/whitelist",
        id: "7",
      },
      {
        icon: UserTimes,
        id: "9",
        link: "/karma",
        title: "Karma",
      },
    ],
  },
  {
    title: "BUSINESSES",
    items: [
      {
        icon: Org,
        title: "Organization",
        link: "/org",
        id: "10",
      },
      {
        icon: loanProduct,
        title: "Loan Products",
        link: "/loan",
        id: "11",
      },
      {
        icon: SavingProduct,
        title: "Saving Products",
        link: "/savings",
        id: "12",
      },
      {
        icon: Fees,
        title: "Fees and Charges",
        link: "/fees",
        id: "13",
      },
      {
        icon: Transactions,
        title: "Transactions",
        link: "/transactions",
        id: "14",
      },

      {
        icon: Services,
        title: "Services",
        id: "15",
        link: "/services",
      },
      {
        icon: ServiceAccount,
        title: "Service Accounts",
        link: "/account",
        id: "16",
      },
      {
        icon: Settlement,
        title: "Settlements",
        link: "/settlement",
        id: "17",
      },
      {
        icon: Report,
        title: "Reports",
        id: "18",
        link: "/report",
      },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      {
        icon: Slider,
        title: "Preferences",
        link: "/slider",
        id: "19",
      },
      {
        icon: Badge,
        title: "Fees and Pricing",
        link: "/badge",
        id: "20",
      },
      {
        icon: Audits,
        title: "Audit Logs",
        link: "/audit",
        id: "21",
      },
    ],
  },
];

export default dashboard;

export const dashboardCard = [
  {
    icon: FirstCard,
    title: "USERS",
    stats: "23,900",
  },
  {
    icon: ActiveUsers,
    title: "ACTIVE USERS",
    stats: "23,900",
  },
  {
    icon: UserLoans,
    title: "USERS WITH LOANS",
    stats: "23,900",
  },
  {
    icon: UserSaving,
    title: "LOANS WITH SAVINGS",
    stats: "23,900",
  },
];

export const TableHeaders = [
  {
    Icon: FilterIcons,
    id: "1",
    title: "Organization",
    alt: "organization",
  },
  {
    Icon: FilterIcons,
    title: "UserName",
    id: "2",
    stats: "username",
  },
  {
    Icon: FilterIcons,
    id: "3",
    title: "Email",
    stats: "email",
  },
  {
    Icon: FilterIcons,
    title: "Phone Number",
    id: "4",
    stats: "phone number",
  },
  {
    Icon: FilterIcons,
    title: "Date Joined",
    id: "5",
    stats: "date joined",
  },
  {
    Icon: FilterIcons,
    id: "6",
    title: "Status",
    stats: "status",
  },
  {
    Icon: "",
    id: "7",
    title: "",
    stats: "",
  },
];

export const UserDetailsInfo = [
  {
    title: "Personal Information",
    items: [
      {
        id: "1",
        title: "Full Name",
      },
      {
        title: "Phone Number",
        id: "2",
      },
      {
        id: "3",
        title: "Email Address",
      },
      {
        title: "Phone Number",
        id: "4",
      },
      {
        title: "bvn",
        id: "5",
      },
      {
        id: "6",
        title: "Gender",
      },
      {
        id: "6",
        title: "Marital Status",
      },
      {
        id: "6",
        title: "Children",
      },
      {
        id: "7",
        title: "Type of Residence",
      },
    ],
  },
  {
    title: "Eduction And Employment",
    items: [
      {
        id: "1",
        title: "Level of education",
      },
      {
        title: "Employment Status",
        id: "2",
      },
      {
        id: "3",
        title: "Sector of Employment",
      },
      {
        title: "Duration of Employment",
        id: "4",
      },
      {
        title: "Office Email",
        id: "5",
      },
      {
        id: "6",
        title: "Monthly Income",
      },
      {
        id: "6",
        title: "Loan Repayment",
      },
      {
        id: "6",
        title: "Children",
      },
      {
        id: "7",
        title: "Type of Residence",
      },
    ],
  },
  {
    title: "Social",
    items: [
      {
        id: "1",
        title: "Twitter",
      },
      {
        title: "Facebook",
        id: "2",
      },
      {
        id: "3",
        title: "Instagram",
      },
    ],
  },
  {
    title: "Gurantor",
    items: [
      {
        id: "1",
        title: "Full Name",
      },
      {
        title: "Phone Number",
        id: "2",
      },
      {
        id: "3",
        title: "Email Address",
      },
      {
        title: "Relationship",
        id: "4",
      },
    ],
  },
];
