import { useState, useEffect, useId } from "react";
// import "./App.css";
// 파이어베이서 파일에서 import 해온 db

// db에 접근해서 데이터를 꺼내게 도와줄 친구들
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

function UserRead() {
  const [users, setUsers] = useState([]);
  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(db, "users");

  // 유니크 id를 만들기 위한 useId(); - react 18 기능으로, 이 훅을 이렇게 사용하는게 맞고 틀린지는 모른다.
  const uniqueId = useId();
  console.log(uniqueId);

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

  // 띄워줄 데이터 key값에 고유ID를 넣어준다.
  const showUsers = users.map((value) => (
    <div key={uniqueId}>
      <h1>Name: {value.name}</h1>
      <h1>Age: {value.age}</h1>
    </div>
  ));
  return <div className="m-32">{showUsers}</div>;
}

export default UserRead;
