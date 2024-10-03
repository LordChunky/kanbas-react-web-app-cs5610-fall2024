import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
        <div className="d-inline border border-dark rounded-pill p-2">
            40% of Total
        </div>
        <FaPlus className="position-relative ms-1" style={{ bottom: "1px" }} />
        <IoEllipsisVertical className="fs-4" />
    </div>
    );
}
