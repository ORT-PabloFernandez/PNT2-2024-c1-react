import "./User.css";
import User from "./User.jsx";

export default function UserList(props) {
  return (
    <ul className="users-list">
      {props.Users.map((user) => {
        return (
          <User
            Id={user["Object Id"]}
            UserName={user["Display name"]}
            Title={user.Title}
            Picture={`./img/${user["Display name"]}.jpg`}
          />
        );
      })}
    </ul>
  );
}
