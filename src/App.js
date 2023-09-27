import React from "react";
import Card from "./card";

function App() {
  return (
    <div>
      <Card
        person={{
          name: "Jack Bauer",
          source:
            "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
          phone: "+987 654 321",
          email: "jack@bauer.com"
        }}
      />
      <Card
        person={{
          name: "Chuck Norris",
          source:
            "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
          phone: "+987 654 321",
          email: "jk@bauer.com"
        }}
      />
    </div>
  );
}
export default App;
