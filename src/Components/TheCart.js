import { useSelector } from "react-redux";
import "./theCart.css";
function TheCart() {
  const state = useSelector((state) => state);
  const sum = state.reduce((n, { price }) => n + price, 0);
  return (
    <div>
      <ul className="cart-ul">
        <li className="cart-li">
          <p>ALBUM</p>
          <p>ARTIST</p>
          <p>PRICE</p>
        </li>
        {state.map((album) => (
          <li key={album.name} className="cart-li">
            <p className="name">{album.name}</p>
            <p>{album.artist.name}</p>
            <p className="price">{album.price}$</p>
          </li>
        ))}
        <li className="cart-li">
          <p></p>
          <p>sum:</p>
          <p>{sum}$</p>
        </li>
      </ul>
    </div>
  );
}

export default TheCart;
