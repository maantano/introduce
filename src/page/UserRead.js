import { useState, useEffect, useId } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

function UserRead() {
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

  const showUsers = users.map((value) => (
    <div key={uniqueId}>
      <h1>Name: {value.name}</h1>
      <h1>Age: {value.age}</h1>
    </div>
  ));
  return <div className="m-32">{showUsers}</div>;
}

export default UserRead;
