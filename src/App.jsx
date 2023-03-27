import "./App.css";
import db from "./db/db.json";
import { useState } from "react";
import ContainerInfo from "./components/ContainerInfo";


// import bg1 from "./assets/images/bg1"
const images = ['bg1' , 'bg2' , 'bg3' , 'bg4']

function App() {
  const getRandomItem = (listItem) => {
    const randomIndex = Math.floor(Math.random() * listItem.length);

    return listItem[randomIndex];
  };

  const [quote, setQuote] = useState(getRandomItem(db));
  const [bgImage, setBgImage] = useState(getRandomItem(images))

  const handleNewQuote = () => {
    setQuote(getRandomItem(db));
    setBgImage(getRandomItem(images));
  };

  return (
    <div className={`App ${bgImage}`}>

      <ContainerInfo quote={quote} handleNewQuote={handleNewQuote} />

      {/* Siempre debemos exportar las imagenes de esta manera con public*/}
      {/* <img src="/images/bg4.png" alt="" /> */}

      {/* Subir imagen desde desde assets */}
      {/* <img src={bg1} alt="" /> */}



    </div>
  );
}

export default App;
