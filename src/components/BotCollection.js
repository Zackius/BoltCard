
import React, { useState} from "react";

function BotCollection({ bolt }) {
  if (bolt.length > 0) {
    return bolt.map((bolts, index) => {
      return (
        <div key={index} className="ui four column grid">
          <div className="row">
            <div>
              <img src={bolts.avatar_url} alt={bolts.name} />
              <p> {bolts.name}</p>
              <span>{bolts.health}</span>
              <span>{bolts.damage}</span>
              <span>{bolts.armor}</span>
            </div>
          </div>
        </div>
      );
    });
  }
  
  const [bot, setbot] = useState("")
  

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
