import axios from "axios";
import Bots_url from "./Api";

function GetAllBots() {
  axios
    .get({ Bots_url })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response;
    });
}
export default GetAllBots;
