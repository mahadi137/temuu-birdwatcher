import React, { useState } from "react";
import "./App.css";

import Birdpage from "./Birdpage";
import TodoInput from "./AddBird";
import Search from "./Search";

function App() {
  const [birdLink, setbirdLink] = useState("");
  const [birdName, setbirdName] = useState("");
  const [searchTearm, setSearchTearm] = useState("");

  return (
    <div className="App">
      <TodoInput
        birdLink={birdLink}
        setbirdLink={setbirdLink}
        birdName={birdName}
        setbirdName={setbirdName}
      />
      <Search searchTearm={searchTearm} setSearchTearm={setSearchTearm} />

      <Birdpage searchTearm={searchTearm} />
    </div>
  );
}

export default App;
