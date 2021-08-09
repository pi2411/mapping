import React from "react";
import Dl from "./Dl";
import emojipedia from "../emojipedia";

function MackDl(emojipedia) {
  return (
    <Dl
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(MackDl)}</dl>
    </div>
  );
}

export default App;
