import React, { useState, useEffect } from "react";
import axios from "axios";
import BotCollection from "./BotCollection";

function GetAllBots() {
  const [bolt, setBolt] = useState("");

  useEffect(() => {
    getBolt();
  }, []);

  const getBolt = () => {
    axios
      .get(" http://localhost:8002/bots")
      .then((response) => {
        const allBolt = response.data;
        setBolt(allBolt);
      })
      .catch((err) => {
        return err.response;
      });
  };
  return <BotCollection bolt={bolt} />;
}
export default GetAllBots;
