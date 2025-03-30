import axios from "axios";
<<<<<<< HEAD
const URL = "https://quizwiz-exev.onrender.com";
=======
const URL = "https://quizwiz-hnwc.onrender.com";
>>>>>>> 0c53bac024d88862457cff0ef1a66159c32067db
export const addCandidate = async (data) => {
  try {
    let res = await axios.post(`${URL}/addStudent`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getCandidate = async (data) => {
  try {
    let res = await axios.post(`${URL}/getStudent`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateScore = async (data) => {
  try {
    let res = await axios.post(`${URL}/updateScore`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
