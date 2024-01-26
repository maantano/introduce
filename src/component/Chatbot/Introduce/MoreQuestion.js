import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../firebase-config";
import { useDispatch } from "react-redux";
import { chatbotReset } from "../../../redux/feature/chatbotSlice";

const MoreQuestion = () => {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [description, setDescription] = useState();
  const usersCollectionRef = collection(db, "users");
  const dispatch = useDispatch();
  const createUsers = async (e) => {
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
    setTitle("");
    setAuthor("");
    setDescription("");
    dispatch(chatbotReset());
  };
  return (
    <div
      className="p-5 border border-solid rounded-md w-full mb-24"
      style={{ borderColor: "#CED7E1" }}
    >
      <form className=" flex flex-col gap-4 md:gap-6">
        <div className="grid gap-2 ">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
            htmlFor="title"
          >
            답변 받을 이메일
          </label>
          <input
            className={`flex h-10 w-full rounded-md border-solid border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-white bg-opacity-15 text-black border-gray-400`}
            id="title"
            placeholder="답변 받을 이메일"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required=""
          />
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
            htmlFor="author"
          >
            제목
          </label>
          <input
            className={`flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-white bg-opacity-15 text-black border-gray-400`}
            id="author"
            placeholder="제목"
            onChange={(e) => setAuthor(e.target.value)}
            required=""
            value={author}
          />
        </div>
        <div className="grid gap-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
            htmlFor="description"
          >
            질문
          </label>
          <textarea
            className={`flex min-h-[120px] w-full rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none  bg-white bg-opacity-15 text-black border-gray-400`}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="질문"
            id="description"
            value={description}
            required=""
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-40 bg-white bg-opacity-30 text-gray-500 border-gray-500 border border-solid hover:bg-opacity-100 hover:border-opacity-100 hover:text-black"
            onClick={createUsers}
          >
            문의 등록
          </button>
        </div>
      </form>
    </div>
  );
};

export default MoreQuestion;
