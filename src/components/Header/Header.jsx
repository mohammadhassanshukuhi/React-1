import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const startingWords = ["Fundamental", "Essential", "Great"];

function genRandom() {
  return Math.floor(Math.random() * startingWords.length);
}
function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {startingWords[genRandom()]} React concepts you will need for almost any
        app you are going to build!
      </p>
    </header>
  );
}
export default Header;