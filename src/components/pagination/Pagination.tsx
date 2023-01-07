import { useContext, useState } from "react";
import "./pagination.scss";
import ReactPaginate from "react-paginate";
import { ReactComponent as PrevBtn } from "../../images/prev-btn.svg";
import { ReactComponent as NextBtn } from "../../images/next-btn.svg";
import { UserContext } from "../../context/UserContext";

const Pagination = ({ itemsPerPage }: { itemsPerPage: number }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const { users, handlePageClick, pageCount } = useContext(UserContext);

  // // Simulate fetching items from another resources.
  // // (This could be items from props; or items loaded in a local state
  // // from an API endpoint with useEffect and useState)
  // const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const currentItems = users.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(total / itemsPerPage);

  // // Invoke when user click to request another page.
  // const handlePageClick = (event: any) => {
  //   const newOffset = (event.selected * itemsPerPage) % users.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };

  return (
    <div className="pagination-container">
      <div className="pagination-dropdown">
        Showing
        <span>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </span>
        out of 100
      </div>
      <div className="page-list">
        <ReactPaginate
          activeClassName={"active"}
          disabledClassName={"disabled-page"}
          breakLabel="..."
          breakClassName={"break"}
          containerClassName={"react-pagination-container"}
          nextLabel={<NextBtn />}
          pageClassName={"item"}
          nextClassName={"next"}
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel={<PrevBtn />}
          renderOnZeroPageCount={() => null}
        />
      </div>
    </div>
  );
};

export default Pagination;
