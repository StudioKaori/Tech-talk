import Api from "./Api";
const baseUrl = "/user";

class UserApi {
  getLoggedInUser() {
    return Api.get(baseUrl + "/loggedInUser");
  }
}

export default new UserApi();
