import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import classes from "./Home.module.css";
import { Link, defer } from "react-router-dom";
import { NavLink } from "react-router-dom";
const TestList = () => {
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
  const deleteUser = async (id) => {
    // 내가 삭제하고자 하는 db의 컬렉션의 id를 뒤지면서 데이터를 찾는다
    const userDoc = doc(db, "users", id);
    // deleteDoc을 이용해서 삭제
    await deleteDoc(userDoc);
  };

  const onClickEditHandler = (e) => {
    // e.preventDefault();

    console.log("Edit!!!");
  };
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
      <div
        className={`border border-solid border-gray-400 shadow-sm rounded-lg ${classes.tableList}`}
      >
        {/* <div className="relative w-full overflow-auto">
          <div className="grid grid-cols-4 w-full">
            <div className="h-12 px-4 text-center align-middle font-medium text-muted-foreground pr-0 max-w-[150px]">
              Title
            </div>
            <div className="h-12 px-4 text-center align-middle font-medium text-muted-foreground pr-0">
              Description
            </div>
            <div className="h-12 px-4 text-center align-middle font-medium text-muted-foreground pr-0 hidden md:table-cell">
              Created At
            </div>
            <div className="h-12 px-4 text-center align-middle font-medium text-muted-foreground pr-0">
              Actions
            </div>
            <div className="">
              {users.map((item) => (
                <React.Fragment key={item.id}>
                  <NavLink to={item.id}>
                    <div
                      className={`h-12 px-4 text-center align-middle font-medium pr-0 ${classes.tableListItem}`}
                    >
                      {item.title}
                    </div>
                  </NavLink>
                  <div
                    className={`h-12 px-4 text-center align-middle font-medium pr-0 ${classes.tableListItem}`}
                  >
                    {item.author}
                  </div>
                  <div
                    className={`h-12 px-4 text-center align-middle font-medium pr-0 hidden md:table-cell ${classes.tableListItem}`}
                  >
                    {item.date.toLocaleString()}
                  </div>
                  <div
                    className={`h-12 px-4 text-center align-middle font-medium pr-0 ${classes.tableListItem}`}
                  >
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
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div> */}

        <div className="relative w-full overflow-auto">
          <table className=" w-full caption-bottom text-sm">
            <thead className="border-b border-solid border-gray-400">
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
                  {/* </NavLink> */}
                  <td className="p-4 align-middle pr-0">{item.author}</td>
                  <td className="p-4 align-middle pr-0 hidden md:table-cell">
                    {item.date.toLocaleString()}
                  </td>
                  <td className="p-4 align-middle pr-0">
                    {/* <NavLink to={`/edit/${item.id}`}> */}
                    <button
                      onClick={onClickEditHandler}
                      className={`${classes.editBtn} inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-gray-300 border-gray-300`}
                    >
                      Edit
                    </button>
                    {/* </NavLink> */}
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
      </div>
    </main>
  );
};

export default TestList;

async function loadDetail(id) {
  const docData = await getDoc(doc(db, "users", id));
  //   console.log("data ===>", data.data());
  const data = docData.data();
  const loadData = {
    title: data.title,
    author: data.author,
    description: data.description,
    date: data.date.toDate(),
  };
  console.log("loadData ===>", loadData);

  //   const docRef = doc(db, "users", id);
  //   const docSnap = await getDoc(docRef);
  //   const data2 = docSnap.data();
  //   //   const data = await getDoc(doc(db, "users", id));
  //   //   console.log("data ===>", data.data());
  //   const loadData2 = {
  //     title: data.title,
  //     author: data.author,
  //     description: data.description,
  //     date: data.date.toDate(),
  //   };

  return loadData;
  // const getUser = async () => {
  // 	try {
  // 	  const data = await getDoc(doc(db, "users", params.detailId));
  // 	  setUserData(data.data());
  // 	} catch (error) {
  // 	  console.error("Error fetching user data:", error);
  // 	}
  //   };
  // const response = await fetch(`http://localhost:8080/events/` + id);
  // if (!response.ok) {
  //   throw json(
  // 	{ message: "Could not fetch details for selected event" },
  // 	{ status: 500 }
  //   );
  // } else {
  //   const resData = await response.json();
  //   return resData.event;
  // }
}
export async function loader({ req, params }) {
  const id = params.detailId;
  console.log("id =====>", id);

  return defer({ detailData: await loadDetail(id) });
}
