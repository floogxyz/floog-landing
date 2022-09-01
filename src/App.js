import "./App.css";
import Logo from "./assets/logo.svg";
function App() {
  return (
    <div className="main">
      <div className="content-container">
        <img className="logo" alt="logo" src={Logo} />
        <h2 id="desc">Photo sharing for Web3. Or whatever that is anyway.</h2>
        <button>make friends</button>
      </div>
    </div>
  );
}

export default App;
