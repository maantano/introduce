import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import { db } from "../firebase-config";

const DescriptDetail = () => {
  const { detailData } = useRouteLoaderData("test-detail");
  const { title, author, description, date } = detailData;

  //   console.log(detailData.date.toDate());

  //   const params = useParams();
  //   const [userData, setUserData] = useState([]);
  //   //
  //   const getUser = async () => {
  //     try {
  //       const data = await getDoc(doc(db, "users", params.detailId));
  //       setUserData(data.data());
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };
  // ---------------------------------------------
  //   const getUser = async () => {
  //     const data = await getDoc(db, "users", params.detailId);
  //     // console.log(data.data());
  //     setUserData(data.data());
  //     // setUserData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     // setUserData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   useEffect(() => {
  //     getUser();
  //     // console.log("useEffect !!!");
  //     console.log("userData ===>", userData);
  //   }, []);
  //   useEffect(() => {
  //     getUser();
  //   }, []);
  //   const { date, title, author, description } = userData;
  //   console.log(userData.date.toDate());
  //   const formattedDate = date ? date.toDate() : undefined;
  //   console.log(
  //     "formattedDate, title, author, description ===>",
  //     formattedDate,
  //     title,
  //     author,
  //     description
  //   );
  //   const userDoc = doc(params, "users", params);
  return (
    <div className="m-28">
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col w-full max-w-2xl p-8 bg-white shadow-md rounded-lg dark:bg-gray-800">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {/* Bulletin Board Post Title */}
            {title}
          </h1>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <h6 className="text-sm">{date.toLocaleString()}</h6>
            {/* <h6 className="text-sm">Posted on January 1, 2024</h6> */}
            <div className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              by{" "}
              <span className="text-gray-700 dark:text-gray-200 font-bold">
                {/* Author Name */}
                {author}
              </span>
            </div>
          </div>
          <div className="mt-8 text-gray-600 dark:text-gray-300">
            <p>{description}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              interdum diam. Cras feugiat mi a dolor aliquet, vitae auctor felis
              ultrices. Sed vitae pretium tortor, eget fermentum tortor.
            </p>
            <p className="mt-4">
              Pellentesque et enim vitae ante mollis dignissim at ut enim. Cras
              elementum condimentum justo, nec faucibus quam accumsan quis.
              Quisque non metus velit. Curabitur et venenatis urna. Maecenas at
              fermentum nibh, eget consequat enim.
            </p>
            <p className="mt-4">
              Donec aliquam est dui, vel vestibulum diam sollicitudin id.
              Quisque feugiat malesuada molestie.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DescriptDetail;
