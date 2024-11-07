import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
export default function ProtectedDashboard({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const { cid, aid } = useParams();

    // If the user is enrolled in the class, allow them to access the course, otherwise return them back to the Dashboard page
    if (enrollments.some(
        (enrollment: any) => 
        enrollment.user === currentUser._id && 
        enrollment.course === cid)) {
        return children;
    } else {
        return <Navigate to="/Kanbas/Dashboard" />;
    }
}