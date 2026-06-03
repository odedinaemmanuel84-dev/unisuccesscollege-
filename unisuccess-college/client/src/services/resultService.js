import axios from "axios";

const API_URL =
  "http://localhost:5000/api/results";

export const checkResult = async (
  studentId,
  pin
) => {
  const response = await axios.post(
    `${API_URL}/check`,
    {
      studentId,
      pin,
    }
  );

  return response.data;
};

export const getStudentResults =
  async (studentId) => {
    const response = await axios.get(
      `${API_URL}/${studentId}`
    );

    return response.data;
  };
