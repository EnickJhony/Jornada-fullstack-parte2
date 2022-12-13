import MarcaOcean from "../../assets/brand.svg";
import "./header.css";

function Header() {
  return (
    <header className="cabecalho">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-2">
            <img src={MarcaOcean} alt="" width={50} />
          </div>
          <div className="col-10">
            <a href="#" className="link">
              Link 1
            </a>
            <a href="#" className="link">
              Link 2
            </a>
            <a href="#" className="link">
              Link 3
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
