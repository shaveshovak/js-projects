import { useEffect, useState, useRef } from "react";
import axios from "axios";
import domtoimage from "dom-to-image";
import "./index.css";

export default function App() {
  const [memes, setMemesArray] = useState();
  const [currentMeme, setCurrentMeme] = useState();
  const [text, setText] = useState({
    top: "",
    bottom: ""
  });

  const memeRef = useRef();

  useEffect(() => {
    try {
      axios.get("https://api.imgflip.com/get_memes").then((response) => {
        const allMemes = response.data.data.memes;
        setMemesArray(allMemes);
        setCurrentMeme(allMemes[Math.floor(Math.random() * allMemes.length)]);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log(currentMeme)
  const nextOrPrevious = (e) => {
    // Circulate back and forth in the memes array (-1 or +1)
    // if at the edges of the array (0 or 100); rotates all the way to the other side

    const direction = e.target.name; // "next" or "previous"
    const idx = currentMeme.idx || memes.findIndex((el) => el === currentMeme);
    const nextMeme = idx + 1;
    const previousMeme = idx - 1;

    // Check out the values that we have here:
    // console.log({ idx, nextMeme, previousMeme, length: memes.length });
    if (
      direction === "next" ? nextMeme > memes.length - 1 : previousMeme <= 0
    ) {
      direction === "next"
        ? setCurrentMeme(memes[0])
        : setCurrentMeme(memes[memes.length - 1]);
    } else {
      setCurrentMeme(memes[direction === "next" ? nextMeme : previousMeme]);
    }
  };

  const random = () => {
    setCurrentMeme(memes[Math.floor(Math.random() * memes.length)]);
  };

  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    const currentMemeIdx = memes.findIndex((el) => el === currentMeme);
    if (!e.target.files.length) {
      return alert("Please select a file");
    }
    const imgUrl = URL.createObjectURL(e.target.files[0]);
    setCurrentMeme({ url: imgUrl, idx: currentMemeIdx });
    e.target.value = "";
  };

  const generatePic = () => {
    domtoimage
      .toJpeg(memeRef.current, { quality: 0.95 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "meme.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch((e) => console.log(e));
  };

  if (!currentMeme) return null;

  return (
    <div className="container">
      {/* <h1 className="title">I can has memes?</h1> */}
      <form className="textForm">
        <input
          type="text"
          placeholder="top"
          name="top"
          value={text.top}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="bottom"
          name="bottom"
          value={text.bottom}
          onChange={handleChange}
        />
        {/* <InputField} /> */}
      </form>
      <div className="controlButtons">
        {/* <button onClick={nextOrPrevious} name="previous">
          Previous
        </button>
        <button onClick={random}>Random</button>
        <button onClick={nextOrPrevious} name="next">
          Next
        </button>{" "}
        <label htmlFor="user-pic" className="choose-file">
          Choose file
        </label>
        <input
          type="file"
          id="user-pic"
          name="user-pic"
          accept="image/png, image/jpeg"
          onChange={handleFileUpload}
          className="hidden"
        /> */}
        <button onClick={generatePic}>Generate</button>
      </div>
      <div className="memeContainer" ref={memeRef}>
        <h2 className="memeText top overflow">{text.top}</h2>
        <img src={currentMeme.url} alt={currentMeme.name} className="meme" />
        <h2 className="memeText bottom overflow">{text.bottom}</h2>
      </div>
    </div>
  );
}
