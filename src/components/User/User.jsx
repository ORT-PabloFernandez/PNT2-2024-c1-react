import { Link } from "react-router-dom";
import "./User.css";
import { useState } from "react";

export default function User(props) {
  // codigo javascript
  //let contador = 0;
  const [contador, setContador] = useState(0);

  const HanlderClick_User = () => {
    //contador++;
    setContador(contador + 1);
    console.log(contador);
    // document.getElementById  --> no funciona
  };

  // retorno el JSX
  return (
    <li className="user-item" onClick={HanlderClick_User}>
      <div className="card user-item__content">
        <Link to={`/users/${props.Id}`}>
          <div className="user-item__image avatar">
            <img src={props.Picture} alt="{props.UserName}" />
          </div>
          <div className="user-item__info">
            <h2>{props.UserName}</h2>
            <h2>{props.Title}</h2>
            <h3>{contador}</h3>
          </div>
        </Link>
      </div>
    </li>
  );
}
