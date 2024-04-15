import UserList from "./UserList";
//import users from "./MocUser.js";
import { useState, useEffect } from "react";

export default function UserPage(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Esto se llama la primera vez que carga el componente.
    fetch(
      "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json"
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <UserList Users={users} />
    </div>
  );
}
