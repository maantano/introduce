import React from "react";
import { useState, useEffect, useId } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
const UserCreat = () => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const uniqueId = useId();

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const createUsers = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: newAge });
  };
  const showUsers = users.map((value) => (
    <div key={uniqueId}>
      <h1>Name: {value.name}</h1>
      <h1>Age: {value.age}</h1>
    </div>
  ));
  return (
    <div className="m-32">
      <div className="App">
        <input
          type="text"
          placeholder="name..."
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="age..."
          onChange={(event) => {
            setNewAge(event.target.value);
          }}
        />
        <button onClick={createUsers}>Create User</button>
        {showUsers}
      </div>
    </div>
  );
};

export default UserCreat;
