import { useRef, useState } from "react";
import TableModal from "../tableModal/TableModal";
import { ReactComponent as MenuIcon } from "../../images/tablemenu.svg";
import clsx from "clsx";
import { UserInterface } from "../../Types";
import dayjs from "dayjs";
import useOutHook from "../../hooks/useOutHook";
import useModal from "../../hooks/useModal";
import OrganizationFilter from "../organizationFilter/OrganizationFilter";

type Props = {
  headers: any;
};
const TableHeader = ({ headers: data }: Props) => {
  const { toggle } = useModal();
  const [currentID, setCurrentID] = useState("");
  const modalRef = useRef<HTMLTableDataCellElement>(null);
  const [currentFilterID, setCurrentFilterID] = useState<string | number>("");

  const closeModal = () => {
    setCurrentFilterID("");
  };

  useOutHook({ ref: modalRef, callbck: closeModal });

  return (
    <th ref={modalRef}>
      <OrganizationFilter
        isOpen={currentFilterID === data.id}
        toggle={closeModal}
      />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <p>{data.title}</p>
        <span onClick={() => setCurrentFilterID(data.id)}>
          <img src={data.Icon} alt={data.alt} />
        </span>
      </div>
    </th>
  );
};

export default TableHeader;
