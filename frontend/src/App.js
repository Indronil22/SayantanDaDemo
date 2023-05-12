import "./App.css";
import { useState, useEffect } from "react";

function Header() {
  return <div>InstaCountry</div>;
}

function UserCard(props) {
  console.log("props", props);
  return (
    <div style={{ backgroundColor: "#f48f84", margin: 20, padding: 20 }}>
      <div>Username: {props.name} </div>
      <img src={props.image} style={{ height: 150, width: 150 }} />
      <div>{props.title}</div>
    </div>
  );
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        setUsers(res);
      });
  }, []);

  return (
    <div>
      <Header />
      {users.map((user) => (
        <UserCard name={user.user_name} image={user.image_url} title={user.image_title} />
      ))}
    </div>
  );
}

export default App;
