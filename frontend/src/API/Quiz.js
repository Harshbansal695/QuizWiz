import axios from "axios";
<<<<<<< HEAD
const URL = "https://quizwiz-exev.onrender.com";
=======
const URL = "https://quizwiz-hnwc.onrender.com";
>>>>>>> 0c53bac024d88862457cff0ef1a66159c32067db
export const QuizDetails = async (data) => {
  try {
    let res = await axios.post(`${URL}/getQuiz`, data);
    return { data: res.data, status: res.status };
  } catch (error) {
    return { status: -1, Message: "Could not connect to backend" };
  }
};

export const generateQuiz = async (data) => {
  try {
    let res = await axios.post(`${URL}/generateQuiz`, data);
    return res;
  } catch (error) {
    return { status: -1, Message: "Could not connect to backend" };
  }
};

export const updateQuiz = async (data) => {
  try {
    let res = await axios.post(`${URL}/updateQuiz`, data);
    return res;
  } catch (error) {
    return { status: -1, Message: "Could not connect to backend" };
  }
};

export const getQuizes = async (data) => {
  try {
    let res = await axios.post(`${URL}/getQuizes`, data);
    return res;
  } catch (error) {
    return { status: -1, Message: "Could not connect to backend" };
  }
};
