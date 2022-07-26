import React from "react";

function BotCollection({ bolt }) {
  // const [add, setAdd] = useState("");

  // const handleClick = () => {
  //   // setAdd();
  // };
  // console.log(add);
  // function manageBolt(boll) {
  //   setAdd(boll);
  // }
  if (bolt.length > 0) {
    return bolt.map((bolts, index) => {
      return (
        <div key={index} className="ui four column grid">
          <div className="row">
            <div>
              <img className="images" src={bolts.avatar_url} alt={bolts.name} />
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
  return (
    <div className="ui four column grid">
      <div className="row">
        <div></div>
      </div>
    </div>
  );
}

export default BotCollection;
