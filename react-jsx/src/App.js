import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";
import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  return (
    <div className="App-container">
      <Header />

      <Main />
     <Sidebar/>
      <Footer />
    </div>
  );
}

export default App;
