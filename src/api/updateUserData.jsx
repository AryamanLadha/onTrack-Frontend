import axios from "axios";

export const config = {
  headers: {
    "Content-type": "application-json",
  },
  baseURL: "https://ontrack-backend.herokuapp.com",
};

export const updateUserData = async (data) => {
  await axios.put(`${config.baseURL}/api/auth/update`, {
    majors: data.majors,
    dates: {
      quarterEntered: data.startQtr,
      quarterExpectedGraduation: data.endQtr,
    },
    enteredAs: data.gradeEntered,
    coursesTaken: data.coursesTaken,
  }, { withCredentials: true })
  .then(() => {
    // console.log("PUT_USER_DATA_SUCCESS");
  })
  .catch((error) => {
    console.log(error);
  });
};
