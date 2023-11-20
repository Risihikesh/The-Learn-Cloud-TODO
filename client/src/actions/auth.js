import * as api from "../api";

export const login = async (_data) => {
  try {
    const { data } = await api.logIn(_data);
    localStorage.setItem("Profile", JSON.stringify(data.data));
    return data.data;
  } catch (error) {
    // console.log("error is: ");
    // console.log(error);
    return error;
  }
};

export const signup = async (_data) => {
  try {
    const { data } = await api.signUp(_data);
    localStorage.setItem("Profile", JSON.stringify(data.data));
    // console.log(data.data);
    return data.data;
  } catch (error) {
    // console.log(error.message);
    // console.log("Sme error occured");
    return error;
  }
};

export const logOut = () => {
  localStorage.removeItem("Profile");
};
