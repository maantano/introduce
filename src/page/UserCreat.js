import React from "react";
import { useState, useEffect, useId } from "react";

// 파이어베이서 파일에서 import 해온 db

// db에 데이터에 접근을 도와줄 친구들
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
const UserCreat = () => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  console.log(newName, newAge);
  const [users, setUsers] = useState([]);
  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(db, "users");
  const uniqueId = useId();
  // 시작될때 한번만 실행
  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getUsers = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(usersCollectionRef);
      // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  const createUsers = async () => {
    // addDoc을 이용해서 내가 원하는 collection에 내가 원하는 key로 값을 추가한다.
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
        {/* onchange를 이용해서, 변하는 값을 state로 저장한다. */}
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
