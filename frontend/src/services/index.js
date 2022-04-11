import axios from "axios";
const sendRequest = async ({ url, method }, data = null) => {
  let apiurl = 'http://localhost:5000/api' + url;
  let token = localStorage.getItem("auth-token")
    ? localStorage.getItem("auth-token")
    : "";
  try {
    const response = await axios({
      url: apiurl,
      method,
      data,
      headers: {
        AUthorization: token,
      },
    });
    return response.data;
  } catch (error) {
    return { error: error.response.data };
  }
};

export { sendRequest };
