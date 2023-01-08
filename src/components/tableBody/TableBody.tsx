import { useRef, useState } from "react";
import TableModal from "../tableModal/TableModal";
import { ReactComponent as MenuIcon } from "../../images/tablemenu.svg";
import clsx from "clsx";
import { UserInterface } from "../../Types";
import dayjs from "dayjs";
import useOutHook from "../../hooks/useOutHook";
import useModal from "../../hooks/useModal";

type Props = {
  user: UserInterface;
};
const TableBody = ({ user }: Props) => {
  const { toggle } = useModal();
  const [currentID, setCurrentID] = useState("");
  const modalRef = useRef<HTMLTableDataCellElement>(null);
  const status = ["Active", "Inactive", "Blacklisted", "Pending"];
  const rand = Math.floor(Math.random() * status.length);

  const closeModal = () => {
    setCurrentID("");
  };

  console.log("user id", currentID, user.id);

  useOutHook({ ref: modalRef, callbck: closeModal });

  return (
    <tr key={user.id}>
      <td>{user.orgName}</td>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{dayjs(user.createdAt).format("MMM D, YYYY h:mm A")}</td>
      <td>
        <div
          className={clsx({
            active: status[rand] === "Active",
            inactive: status[rand] === "Inactive",
            pending: status[rand] === "Pending",
            blacklist: status[rand] === "Blacklisted",
          })}
        >
          {status[rand]}
        </div>
      </td>
      <td
        ref={modalRef}
        onClick={() => setCurrentID(user.id)}
        style={{ position: "relative" }}
      >
        <TableModal
          isOpen={currentID === user.id}
          // toggle={toggle}
          userId={user.id}
        />
        <button>
          <MenuIcon />
        </button>
      </td>
    </tr>
  );
};

export default TableBody;
