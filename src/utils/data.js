import UserFriends from "../images/user-friends.svg";
import UserTimes from "../images/user-times.svg";
import Slack from "../images/sack.svg";
import Handshake from "../images/handshake.svg";
import Savings from "../images/piggy-bank.svg";
import WhiteList from "../images/user-check.svg";
import FirstCard from "../images/cardUsers.svg";
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
      },
      {
        icon: UserTimes,
        title: "Guarantors",
      },
      {
        icon: Slack,
        title: "Loans",
      },

      {
        icon: Handshake,
        title: "Decisions Models",
      },
      {
        icon: Savings,
        title: "Savings",
      },
      {
        icon: Slack,
        title: "Loan Requests",
      },
      {
        icon: WhiteList,
        title: "Whitelist",
      },
      {
        icon: UserTimes,
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
      },
      {
        icon: loanProduct,
        title: "Loan Products",
      },
      {
        icon: SavingProduct,
        title: "Saving Products",
      },
      {
        icon: Fees,
        title: "Fees and Charges",
      },
      {
        icon: Transactions,
        title: "Transactions",
      },

      {
        icon: Services,
        title: "Services",
      },
      {
        icon: ServiceAccount,
        title: "Service Accounts",
      },
      {
        icon: Settlement,
        title: "Settlements",
      },
      {
        icon: Report,
        title: "Reports",
      },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      {
        icon: Slider,
        title: "Preferences",
      },
      {
        icon: Badge,
        title: "Fees and Pricing",
      },
      {
        icon: Audits,
        title: "Audit Logs",
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
    title: "Organization",
    alt: "organization",
  },
  {
    Icon: FilterIcons,
    title: "UserName",
    stats: "username",
  },
  {
    Icon: FilterIcons,
    title: "Email",
    stats: "email",
  },
  {
    Icon: FilterIcons,
    title: "Phone Number",
    stats: "phone number",
  },
  {
    Icon: FilterIcons,
    title: "Date Joined",
    stats: "date joined",
  },
  {
    Icon: FilterIcons,
    title: "Status",
    stats: "status",
  },
];
