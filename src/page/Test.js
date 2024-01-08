import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import classes from "./Home.module.css";
import { redirect, useNavigate } from "react-router-dom";
const Test = () => {
  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getUsers = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      // const data = await getDocs(usersCollectionRef);
      const data = await getDocs(
        query(usersCollectionRef, orderBy("date", "desc"))
      );
      setUsers(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          date: doc.data().date.toDate(), // 변환
        }))
      );
    };
    getUsers();
  }, []);

  // author
  // date,
  // description,
  // title

  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [description, setDescription] = useState();
  const createUsers = async (e) => {
    // addDoc을 이용해서 내가 원하는 collection에 내가 원하는 key로 값을 추가한다.
    e.preventDefault();
    const currentDate = new Date();
    await addDoc(usersCollectionRef, {
      title,
      author,
      description,
      date: currentDate,
    });
    const updatedData = await getDocs(
      query(usersCollectionRef, orderBy("date", "desc"))
    );
    setUsers(
      updatedData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        date: doc.data().date.toDate(),
      }))
    );

    // 폼 입력값 초기화
    setTitle("");
    setAuthor("");
    setDescription("");
  };
  // useEffect(() => {
  //   console.log("title ===>", title);
  //   console.log("author ===>", author);
  //   console.log("description ===>", description);
  // }, [title, author, description]);

  // const deleteUser = async (id) => {
  //   // 내가 삭제하고자 하는 db의 컬렉션의 id를 뒤지면서 데이터를 찾는다
  //   const userDoc = doc(db, "users", id);
  //   // deleteDoc을 이용해서 삭제
  //   await deleteDoc(userDoc);
  //   const updatedData = await getDocs(
  //     query(usersCollectionRef, orderBy("date", "desc"))
  //   );
  //   setUsers(
  //     updatedData.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //       date: doc.data().date.toDate(),
  //     }))
  //   );
  // };

  return (
    <main className="mt-28 flex flex-col gap-4 p-4 md:p-6 bg-black text-white">
      <header className="flex items-center gap-4">
        <h1 className="font-semibold text-lg md:text-2xl">Task Manager</h1>
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                className="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white bg-opacity-15 shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 text-gray-300"
                placeholder="Search tasks..."
                type="search"
              />
            </div>
          </form>
        </div>
      </header>
      {/* <div
        className={`border border-white shadow-sm rounded-lg ${classes.tableList}`}
      >
        <div className="relative w-full overflow-auto">
          <table className="border border-gray-700 w-full caption-bottom text-sm">
            <thead className="border-b">
              <tr className="border-b transition-color">
                <th className="h-12 px-4 text-center align-middle font-medium text-muted-foreground pr-0 max-w-[150px]">
                  Title
                </th>
                <th className="h-12 px-4 text-center align-middle font-medium text-muted-foreground pr-0">
                  Description
                </th>
                <th className="h-12 px-4 text-center align-middle font-medium text-muted-foreground pr-0 hidden md:table-cell">
                  Created At
                </th>
                <th className="h-12 px-4 text-center align-middle font-medium text-muted-foreground pr-0">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className={`text-center border-0 ${classes.tableBody}`}>
              {users.map((item) => (
                <tr
                  key={item.id}
                  className={`border-b transition-colors ${classes.tableListItem}`}
                >
                  <td className="p-4 align-middle pr-0 font-medium">
                    {item.title}
                  </td>
                  <td className="p-4 align-middle pr-0">{item.author}</td>
                  <td className="p-4 align-middle pr-0 hidden md:table-cell">
                    {item.date.toLocaleString()}
                  </td>
                  <td className="p-4 align-middle pr-0">
                    <button
                      className={`${classes.editBtn} inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-gray-300 border-gray-300`}
                    >
                      Edit
                    </button>
                    <button
                      className={`${classes.deleteBtn} inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 ml-2 text-gray-300 border-gray-300`}
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r2q:"
                      data-state="closed"
                      onClick={() => {
                        deleteUser(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
      <form className="flex flex-col gap-4 md:gap-6">
        <div className="grid gap-2 ">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className={`flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-white bg-opacity-15 text-gray-300`}
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            required=""
          />
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
            htmlFor="author"
          >
            Author
          </label>
          <input
            className={`flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-white bg-opacity-15 text-gray-300`}
            id="author"
            onChange={(e) => setAuthor(e.target.value)}
            required=""
          />
        </div>
        <div className="grid gap-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className={`flex min-h-[120px] w-full rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none  bg-white bg-opacity-15 text-gray-300`}
            // className={`${classes.noneOutline} flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white bg-opacity-15 text-gray-300`}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            required=""
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-40 bg-white bg-opacity-15 text-gray-300"
            // type="submit"
            onClick={createUsers}
          >
            Add Task
          </button>
        </div>
      </form>
    </main>
  );
};

export default Test;
