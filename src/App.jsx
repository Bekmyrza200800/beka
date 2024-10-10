import { products } from "./utils/constants.js";
import Icon from "./assets/shoes/svg/heart-icon.svg"
import "./shoes.css";

function App() {
  return (
    <>
      <div>
        <h1>Все Кросовки</h1>
        <div className="shoe-block">
          {products.map((item) => (
            <div className="div-shoes">
              <img src={Icon} alt="" className="icon-1"/>
              <img src={item.image} alt="sheeesh" className="img-shoes" />
              <p>{item.title}</p>
              <div className="price00">{item.price0}</div>
              <span className="price-shoes">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
