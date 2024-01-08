// import React from 'react';

// const Widget = () => {
// 	return (
// 		<div className='text-black'>
// 			민경언
// 		</div>
// 	);
// };

// export default Widget;

// new file called DogPicture.jsx
import React, { useEffect, useState } from "react";

const Widget = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} alt="a dog" />
    </div>
  );
};

export default Widget;
