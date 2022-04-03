import axios from "axios";
import "./App.css";

function App() {
  const fetchMeme = () => {
    return axios
      .get("https://randomuser.me/api")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <h1>mem gen</h1>
      <button
        onClick={() => {
          fetchMeme();
        }}
      >
        ok
      </button>
    </div>
  );
}

export default App;
