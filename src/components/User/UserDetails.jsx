import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserDetails(props) {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    // Esto se llama la primera vez que carga el componente.
    fetch(
      "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json"
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setUser(data.find((user) => user["Object Id"] === id));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <img src={user.Picture} />
      <h3>{user["Display name"]}</h3>
      <h3>{user["Country/Region"]}</h3>
    </>
  );
}
