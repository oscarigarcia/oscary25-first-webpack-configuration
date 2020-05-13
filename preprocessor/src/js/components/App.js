import React, { useState } from "react";

import data from "./data.json.js.js.js";
import Logo from "../../assets/images/platzi.png";
import Video from "../../assets/video/que-es-core.mp4";

function App(props) {
  const [loaderList, setLoaderList] = useState([]);
  console.log(data);

  function handleClick() {
    setLoaderList(data.loaders);
  }

  return (
    <section>
      <div>
        <video src={Video} width={400} controls />
      </div>
      <div>
        {" "}
        <img src={Logo} alt="" width={400} />
      </div>
      <ul>
        {loaderList.map((item, index) => (
          <li key={index.id}>{item.name}</li>
        ))}
      </ul>
      <p>Qlok wawa</p>
      <button onClick={handleClick}>Dale aquí🌚</button>
    </section>
  );
}

export default App;
