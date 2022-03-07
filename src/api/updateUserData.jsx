import axios from "axios";

export const config = {
  headers: {
    "Content-type": "application-json",
  },
  baseURL: "http://localhost:8000",
};

export const updateUserData = async (data) => {
  console.log("updated");
  await axios.put(`${config.baseURL}/api/auth/update`, {
    majors: data.majors,
    dates: {
      quarterEntered: data.startQtr,
      quarterExpectedGraduation: data.endQtr,
    },
    enteredAs: data.gradeEntered,
    coursesTaken: data.coursesTaken,
  }, { withCredentials: true })
  .then((res) => {
    console.log("PUT_USER_DATA_SUCCESS");
    // console.log(res.data);
  })
};
