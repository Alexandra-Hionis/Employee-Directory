import axios from "axios";

export default {
    getData: () => axios.get("https://randomuser.me/api/?results=150")
}

// Random User API. When the user loads the page, a table of employees should render
// const URL = "https://randomuser.me/api/?results=100&inc=picture,name,email,phone";


// export default {
//   search: function() {
//     return axios.get(URL);
//   }
// };

// import axios from "axios";

// // Random User API. When the user loads the page, a table of employees should render
// const URL = "https://randomuser.me/";

// React wants us to create this object as a variable before we try to export it



// one way
// const URL = "https://randomuser.me/api/"

// const axiosAPI = {
//   search: function() {
//     return axios.get(URL);
//   }
// }
// export default axiosAPI;
