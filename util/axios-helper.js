import axios from "axios";
import { APP_URL } from "../constants/site-config";

export default getAxios = (token = "") => {
  let AuthorizedRequests = axios.create({
    baseURL: APP_URL,
    timeout: 30000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (token.length > 0)
    AuthorizedRequests.defaults.headers.common["Authorization"] =
      "Bearer " + token;

  return AuthorizedRequests;
};
