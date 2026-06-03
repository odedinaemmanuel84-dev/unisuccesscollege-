import axios from "axios";

const API_URL =
  "http://localhost:5000/api/auth";

export const loginUser = async (
  studentId,
  password
) => {
  const response = await axios.post(
    `${API_URL}/login`,
    {
      studentId,
      password,
    }
  );

  return response.data;
};

export const registerStudent = async (
  studentData
) => {
  const response = await axios.post(
    `${API_URL}/register`,
    studentData
  );

  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
