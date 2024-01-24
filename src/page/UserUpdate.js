import { useState, useEffect, useId } from "react";

import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import React from "react";

const UserUpdate = () => {
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
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newField = { age: age + 1 };
    await updateDoc(userDoc, newField);
  };
  const showUsers = users.map((value) => (
    <div key={uniqueId}>
      <h1>Name: {value.name}</h1>
      <h1>Age: {value.age}</h1>
      <button
        onClick={() => {
          updateUser(value.id, value.age);
        }}
      >
        Increase Age
      </button>
    </div>
  ));
  return (
    <div className="m-32 text-white">
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

export default UserUpdate;
