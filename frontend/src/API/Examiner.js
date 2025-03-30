import axios from "axios";
<<<<<<< HEAD
const URL = "https://quizwiz-exev.onrender.com";
=======
const URL = "https://quizwiz-hnwc.onrender.com";
>>>>>>> 0c53bac024d88862457cff0ef1a66159c32067db
export const addExaminer = async (data) => {
  try {
    let res = await axios.post(`${URL}/addExaminer`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getExaminer = async (data) => {
  try {
    let res = await axios.post(`${URL}/getExaminer`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
