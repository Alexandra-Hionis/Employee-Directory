import axios from "axios";

const URL = "https://randomuser.me/api/?results=200"

const axiosAPI = {
  search: function() {
    return axios.get(URL);
  }
}
export default axiosAPI;
