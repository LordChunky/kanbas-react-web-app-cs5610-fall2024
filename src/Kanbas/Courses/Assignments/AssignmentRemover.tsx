export default function AssignmentRemover({ assignmentId, deleteAssignment }:
{ 
    assignmentId: string;
    deleteAssignment: (assignmentId: string) => void; }) {
    return (
    <div id={assignmentId} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog">
            <div className="modal-content">

                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                        Confirmation 
                    </h1>
                </div>

                <div className="modal-body">
                    <p>Are you sure you want to remove the assignment?</p>
                </div>

                <div className="modal-footer">

                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Cancel 
                    </button>

                    <button onClick={() => deleteAssignment(assignmentId)} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                        Confirm 
                    </button>


                </div>
            </div>
        </div>
    </div>
    );
}
        