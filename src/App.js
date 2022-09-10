import { useState } from "react";
import "./styles.css";

const channelDictionary = {
  Coding: [
    {
      name: "📹Tanay Pratap",
      subscribers: "👥39.5K subscribers"
    },
    { name: "📹Akshay Saini", subscribers: "👥222k subscribers" },
    { name: "📹Kunal Kushawa", subscribers: "👥252k subscribers" }
  ],
  Football: [
    { name: "📹YjR", subscribers: "👥84.8K subscribers" },
    { name: "📹ONE MUFC", subscribers: "👥32.6K subscribers" },
    { name: "📹Statman Dave", subscribers: "👥298K subscribers" }
  ],
  Podcasts: [
    { name: "📹Raj Shamani", subscribers: "👥528K subscribers" },
    { name: "📹Varun Mayya", subscribers: "👥125K subscribers" },
    { name: "📹Ayush Wadhwa", subscribers: "👥23K subscribers " }
  ],
  Gaming: [
    { name: "📹Shreeman legend", subscribers: "👥1.78M subscribers" },
    { name: "📹S2G", subscribers: "👥498K subscribers" },
    { name: "📹SlayyPop", subscribers: "👥1.82M subscribers" }
  ]
};
const channelGenre = Object.keys(channelDictionary);
console.log(channelGenre);

export default function App() {
  const [chooseGenre, setGenre] = useState("Coding");
  function genreButtonHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>YouTube ▶ Channel Recommendations</h1>
      <p>
        Have a look at my top youtube channels. Select a genre to get started
      </p>
      {channelGenre.map((genre) => {
        return (
          <button onClick={() => genreButtonHandler(genre)} keys={genre}>
            {genre}
          </button>
        );
      })}
      <hr />
      <div>
        <ul>
          {channelDictionary[chooseGenre].map((genre) => {
            return (
              <li>
                <div>{genre.name}</div>
                <div>{genre.subscribers}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
