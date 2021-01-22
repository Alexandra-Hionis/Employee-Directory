import axios from "axios";

// Random User API. When the user loads the page, a table of employees should render
const URL = "https://randomuser.me/";


export default {
  search: function() {
    return axios.get(URL);
  }
};
