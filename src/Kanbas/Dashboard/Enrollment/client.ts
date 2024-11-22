import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

// get all enrollment info
export const fetchAllEnrollments = async () => {
    const { data } = await axios.get(ENROLLMENTS_API);
    return data;
};

// Unenroll  user
export const unenrollUser = async (userId: string, courseId: string) => {
    const response = await axios.post(`${ENROLLMENTS_API}/${courseId}/unenroll`, {userId: userId});
    return response.data;
};

// Enroll user
export const enrollUser = async (userId: string, courseId: string) => {
    const response = await axios.post(`${ENROLLMENTS_API}/${courseId}/enroll`, {userId: userId});
    return response.data;
};

