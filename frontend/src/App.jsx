import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Card from "./components/card/card"

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content container mb-3 mt-3">
        <div className="row">
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
