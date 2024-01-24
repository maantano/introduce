import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import { db } from "../firebase-config";

const FeedbackDetail = () => {
  const { detailData } = useRouteLoaderData("feedback-detail");
  const { description, date } = detailData;
  return (
    <div className="m-28">
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col w-full max-w-2xl p-8 bg-white shadow-md rounded-lg dark:bg-gray-800">
          {/* <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1> */}
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <h6 className="text-sm">{date.toLocaleString()}</h6>

            {/* <div className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              by{" "}
              <span className="text-gray-700 dark:text-gray-200 font-bold">
                {author}
              </span>
            </div> */}
          </div>
          <div className="mt-8 text-gray-600 dark:text-gray-300">
            <p>{description}</p>
            {/* <p>
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
            </p> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeedbackDetail;
