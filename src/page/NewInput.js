import { useState } from "react";
import { db } from "../firebase-config";
import {
  addDoc,
  collection,
} from "firebase/firestore";

const NewInput = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [description, setDescription] = useState();
  const usersCollectionRef = collection(db, "users");
  const createUsers = async (e) => {
    e.preventDefault();
    const currentDate = new Date();
    await addDoc(usersCollectionRef, {
      title,
      author,
      description,
      date: currentDate,
    });
    setTitle("");
    setAuthor("");
    setDescription("");
  };
  return (
    <div className="m-28 p-5 border border-solid fixed border-gray-500 rounded-md w-2/5">
      <form className=" flex flex-col gap-4 md:gap-6">
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
    </div>
  );
};

export default NewInput;
