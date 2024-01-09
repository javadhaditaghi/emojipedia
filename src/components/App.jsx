import React from "react";
import Hero from "./Hero";
import Dictionary from "./Dictionary";
import Card from "./Card";
import EmojiContent from "./EmojiContent";
import emojipedia from "./emojipedia.js"


function App() {
  return (
    <div>
      <Hero></Hero>


      <Dictionary>

        {emojipedia.map((emoj) => (
          <Card>
            <EmojiContent
              key={emoj.id}
              emoji={emoj.emoji}
              name={emoj.name}
              meaning={emoj.meaning}
            />
          </Card>
        ))}






      </Dictionary>
    </div>
  );
}

export default App;
