import { useState } from "react";

import "./App.css";

function App() {
  const [userinput, setUserinput] = useState("");
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [partsOfSpeech, setPartsOfSpeech] = useState("");
  const [audio, setAudio] = useState();


  const handleClick = (e) => {
    e.preventDefault();

    setWord("");
    setDefinition("");
    setPartsOfSpeech("");
     setAudio();

    console.log(userinput);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userinput}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWord(data[0]?.word || "Not Found");
        setPartsOfSpeech(data[0].meanings[0].partOfSpeech);
        setDefinition(data[0].meanings[0].definitions[0].definition);
        setAudio(
          data[0]?.phonetics[0]?.audio ||
            data[0]?.phonetics[1]?.audio ||
            data[0]?.phonetics[2]?.audio ||
            "Not Found"
        );
        //  console.log(data[0].phonetics[2].audio);
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <div id="main" className="grid place-items-center h-screen bg-[#ACA1FF]">
        <div className=" shadow-xl bg-white mx-10 md:w-150  w-[80vw] md:h-100 md:p-12 p-4 rounded-xl">
          <div id="result" className="mb-8">
            <form onSubmit={handleClick}>
              <input
                value={userinput}
                placeholder="Write Something..."
                onChange={(e) => setUserinput(e.target.value)}
                className="md:w-[75%] w-[70%] border-b-2 border-[#ACA1FF] p-3 mr-[5%] md:mr-[5%] focus:outline-none"
              ></input>

              <button
                type="submit"
                className="md:w-[20%] w-[25%] rounded p-3 text-white bg-[#ACA1FF]"
              >
                Submit
              </button>
            </form>
          </div>
          {word && (
            <>
              <h1 className=" text-4xl font-bold italic mb-3">{word}</h1>
              <h1 className="text-[18px]  text-[#9c9c9c] mb-3">
                {partsOfSpeech}
              </h1>
              <h1 className="text-[18px]  text-[#1a1a1a] mb-3">{definition}</h1>

              {audio !== "Not Found" && audio && (
  <audio controls src={audio}></audio>
)}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
