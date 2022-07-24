import React, { useEffect, useState } from "react";
import axios from "axios";
import GetAllBots from "../Apis/services";

function BotCollection() {
  const [bolt, usebolt] = useState("")
  
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
