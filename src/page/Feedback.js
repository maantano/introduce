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
import { defer } from "react-router-dom";
const Feedback = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "feedback");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(
        query(usersCollectionRef, orderBy("date", "desc"))
      );
      setUsers(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          date: doc.data().date.toDate(),
        }))
      );
    };
    getUsers();
  }, []);
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };
  const onClickEditHandler = (e) => {};
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
        <div className="relative w-full overflow-auto">
          <table className=" w-full caption-bottom text-sm">
            <thead className="border-b border-solid border-gray-400">
              <tr className="border-b transition-color">
                <th className="h-12 px-4 text-center align-middle font-medium text-muted-foreground pr-0">
                  Description
                </th>
                <th className="h-12 px-4 text-center align-middle font-medium text-muted-foreground pr-0 hidden md:table-cell">
                  Created At
                </th>
              </tr>
            </thead>
            <tbody className={`text-center border-0 ${classes.tableBody}`}>
              {users.map((item) => (
                <tr
                  key={item.id}
                  className={`border-b transition-colors ${classes.tableListItem}`}
                >
                  <td className="p-4 align-middle pr-0 hidden md:table-cell">
                    {item.date.toLocaleString()}
                  </td>
                  <td className="p-4 align-middle pr-0">
                    <button
                      onClick={onClickEditHandler}
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
      </div>
    </main>
  );
};

export default Feedback;

async function loadDetail(id) {
  const docData = await getDoc(doc(db, "feedback", id));
  const data = docData.data();
  const loadData = {
    description: data.description,
    date: data.date.toDate(),
  };
  return loadData;
}
export async function loader({ req, params }) {
  const id = params.detailId;
  return defer({ detailData: await loadDetail(id) });
}
