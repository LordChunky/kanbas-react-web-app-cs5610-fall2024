import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import AssignmentRemover from "./AssignmentRemover";

export default function AssignmentCheckingButtons(
    { assignmentId,deleteAssignment }:
    { 
        assignmentId: string;
        deleteAssignment: (assignmentId: string) => void;
    }
) {
    console.log(assignmentId)
    return (
        <div className="float-end">
            <FaTrash 
                className="text-danger me-2 mb-1"
                data-bs-toggle="modal" 
                data-bs-target={`#${assignmentId}`}
            />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
            <AssignmentRemover 
                assignmentId={assignmentId}
                deleteAssignment={deleteAssignment}/>
        </div>
    );
}
