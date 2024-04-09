import "./User.css";

export default function User(props) {
  // codigo javascript

  // retorno el JSX
  return (
    <li className="user-item">
      <div className="card user-item__content">
        <a href="#">
          <div className="user-item__image avatar">
            <img src={props.Picture} alt="{props.UserName}" />
          </div>
          <div className="user-item__info">
            <h2>{props.UserName}</h2>
            <h2>{props.Title}</h2>
          </div>
        </a>
      </div>
    </li>
  );
}
