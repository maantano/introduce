import React, { useEffect, useState } from "react";
import Typography from "@mui/joy/Typography";

import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";

const images = [
  "https://via.placeholder.com/250x250?text=1",
  "https://via.placeholder.com/250x250?text=2",
  "https://via.placeholder.com/250x250?text=3",
];
// style
const Wrapper = styled(motion.div)`
  display: flex;
  width: 90%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const SlideWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
`;

const Box = styled(motion.img)`
  position: absolute;
  width: 30%;
  object-fit: cover;
  border-radius: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: transparent;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const PrevNextBtn = styled.div`
  background-color: #212121;
  border-radius: 24px;
  box-shadow: 0 4px 4px rgba(255, 255, 255, 0.2),
    0 0 8px rgba(255, 255, 255, 0.2);
  color: #fff;
  cursor: pointer;
  height: 30px;
  width: 30px;
  z-index: 999;
`;

const boxVariants = {
  entry: (back) => ({
    x: back ? -300 : 300,
    opacity: 0,
    scale: 0,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
  exit: (back) => ({
    x: back ? 300 : -300,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  }),
};

const PortfolioItem = () => {
  const [imgWebuilder, setImgWebuilder] = useState([]);
  const [visible, setVisible] = useState(0);
  const [back, setBack] = useState(false);
  const imageIndex = wrap(0, images.length, visible);
  const [users, setUsers] = useState([]);
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) =>
      prev === images.length - 1 ? images.length - 1 : prev + 1
    );
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? 0 : prev - 1));
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <Wrapper>
          <PrevNextBtn
            onClick={prevPlease}
            className="flex flex-col items-center justify-center "
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                fill: "currentcolor",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style={{
                  pointerEvents: "none",
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              >
                <path d="M14.96 18.96 8 12l6.96-6.96.71.71L9.41 12l6.25 6.25-.7.71z"></path>
              </svg>
            </div>
          </PrevNextBtn>
          <SlideWrap>
            <AnimatePresence custom={back}>
              <Box
                custom={back}
                variants={boxVariants}
                src={images[imageIndex]}
                initial="entry"
                animate="center"
                exit="exit"
                key={visible}
              />
            </AnimatePresence>
          </SlideWrap>
          <PrevNextBtn
            onClick={nextPlease}
            className="flex flex-col items-center justify-center "
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                fill: "currentcolor",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                focusable="false"
                style={{
                  pointerEvents: "none",
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              >
                <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
              </svg>
            </div>
          </PrevNextBtn>
        </Wrapper>
      </div>
    </>
  );
};

export default PortfolioItem;

// import React, { useEffect, useState } from "react";
// import Typography from "@mui/joy/Typography";

// import styled from "styled-components";
// import { AnimatePresence, motion } from "framer-motion";
// import { wrap } from "popmotion";
// import { db, storage } from "../../firebase-config";
// import { getDownloadURL, listAll, ref } from "firebase/storage";
// import {
//   collection,
//   getDocs,
// } from "firebase/firestore";

// const images = [
//   "https://via.placeholder.com/250x250?text=1",
//   "https://via.placeholder.com/250x250?text=2",
//   "https://via.placeholder.com/250x250?text=3",
// ];
// // style
// const Wrapper = styled(motion.div)`
//   display: flex;
//   width: 90%;
//   height: 100%;
//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
// `;

// const SlideWrap = styled.div`
//   /* width: 500px;
//   height: 500px; */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 500px;
// `;

// const Box = styled(motion.img)`
//   position: absolute;
//   width: 30%;
//   object-fit: cover;
//   border-radius: 20px;
//   text-align: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-shrink: 0;
//   background-color: transparent;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;
// const PrevNextBtn = styled.div`
//   /* position: absolute; */
//   background-color: #212121;
//   border-radius: 24px;
//   box-shadow: 0 4px 4px rgba(255, 255, 255, 0.2),
//     0 0 8px rgba(255, 255, 255, 0.2);
//   color: #fff;
//   cursor: pointer;
//   height: 30px;
//   width: 30px;
//   z-index: 999;
// `;

// const boxVariants = {
//   entry: (back) => ({
//     x: back ? -300 : 300,
//     opacity: 0,
//     scale: 0,
//   }),
//   center: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: { duration: 0.5 },
//   },
//   exit: (back) => ({
//     x: back ? 300 : -300,
//     opacity: 0,
//     scale: 0,
//     transition: { duration: 0.5 },
//   }),
// };

// const PortfolioItem = () => {
//   const [imgWebuilder, setImgWebuilder] = useState([]);
//   const [visible, setVisible] = useState(0);
//   const [back, setBack] = useState(false);
//   const imageIndex = wrap(0, imgWebuilder.length, visible);
//   const [users, setUsers] = useState([]);
//   const nextPlease = () => {
//     setBack(false);
//     setVisible((prev) =>
//       prev === imgWebuilder.length - 1 ? imgWebuilder.length - 1 : prev + 1
//     );
//   };
//   const prevPlease = () => {
//     setBack(true);
//     setVisible((prev) => (prev === 0 ? 0 : prev - 1));
//   };
//   // const usersCollectionRef = collection(db, "Information", "webuilderDetail");
//   // // const usersSnapshot = await getDocs(usersCollectionRef);
//   // // webuilderDetail
//   const [implementation, setImplementation] = useState([]);
//   const [information, setInformation] = useState([]);
//   const [projectIntroduction, setProjectIntroduction] = useState([]);
//   const [remembrance, setRemembrance] = useState([]);
//   //   const getUsers = async () => {
//   //     // const usersSnapshot = await getDocs(usersCollectionRef);
//   //     // getDocs로 컬렉션안에 데이터 가져오기
//   //     // const data = await getDocs(usersCollectionRef);
//   //     const data = await getDocs(usersCollectionRef);
//   //     setUsers(
//   //       data.docs.map((doc) => ({
//   //         ...doc.data(),
//   //         id: doc.id,
//   //         date: doc.data().date.toDate(), // 변환
//   //       }))
//   //     );
//   // };
//   // const getUsers = async () => {
//   //   // getDocs로 컬렉션안에 데이터 가져오기
//   //   // const data = await getDocs(usersCollectionRef);
//   //   const data = await getDocs(
//   //     query(usersCollectionRef, orderBy("date", "desc"))
//   //   );
//   //   setUsers(
//   //     data.docs.map((doc) => ({
//   //       ...doc.data(),
//   //       id: doc.id,
//   //       date: doc.data().date.toDate(), // 변환
//   //     }))
//   //   );
//   // };
//   // useEffect(() => {
//   //   const fetchWebuilderDetail = async () => {
//   //     try {
//   //       // Information 컬렉션의 webuilderDetail 서브컬렉션 가져오기
//   //       const detailCollectionImplementationRef = collection(
//   //         db,
//   //         "Information",
//   //         "webuilderDetail",
//   //         "Implementation"
//   //       );
//   //       const detailCollectionInformationRef = collection(
//   //         db,
//   //         "Information",
//   //         "webuilderDetail",
//   //         "Information"
//   //       );
//   //       const detailCollectionProjectIntroductionRef = collection(
//   //         db,
//   //         "Information",
//   //         "webuilderDetail",
//   //         "ProjectIntroduction"
//   //       );
//   //       const detailCollectionremembranceRef = collection(
//   //         db,
//   //         "Information",
//   //         "webuilderDetail",
//   //         "remembrance"
//   //       );

//   //       // webuilderDetail 서브컬렉션의 문서들 가져오기
//   //       const implementationSnapshot = await getDocs(
//   //         detailCollectionImplementationRef
//   //       );
//   //       const informationSnapshot = await getDocs(
//   //         detailCollectionInformationRef
//   //       );
//   //       const projectIntroductionSnapshot = await getDocs(
//   //         detailCollectionProjectIntroductionRef
//   //       );
//   //       const remembranceSnapshot = await getDocs(
//   //         detailCollectionremembranceRef
//   //       );
//   //       // 가져온 데이터 사용
//   //       const implementationData = implementationSnapshot.docs.map((doc) =>
//   //         doc.data()
//   //       );
//   //       const informationData = informationSnapshot.docs.map((doc) =>
//   //         doc.data()
//   //       );
//   //       const projectIntroductionData = projectIntroductionSnapshot.docs.map(
//   //         (doc) => doc.data()
//   //       );
//   //       const remembranceData = remembranceSnapshot.docs.map((doc) =>
//   //         doc.data()
//   //       );

//   //       // 상태에 데이터 담기
//   //       setImplementation(() => implementationData);
//   //       setInformation(() => informationData);
//   //       setProjectIntroduction(() => projectIntroductionData);
//   //       setRemembrance(() => remembranceData);
//   //     } catch (error) {
//   //       // console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   // 함수 호출
//   //   fetchWebuilderDetail();
//   //   console.log("implementation ===>", implementation);
//   //   console.log("information ===>", information);
//   //   console.log("remembrance ===>", remembrance);
//   //   console.log("projectIntroduction ===>", projectIntroduction);

//   //   // getUsers();
//   //   const fetchData = async () => {
//   //     const fileRef = ref(storage, "webuilder/");
//   //     try {
//   //       const result = await listAll(fileRef);
//   //       const newUrls = await Promise.all(
//   //         result.items.map(async (item) => {
//   //           const url = await getDownloadURL(item);
//   //           return url;
//   //         })
//   //       );

//   //       // 기존 상태에 없는 새로운 URL만 추가
//   //       setImgWebuilder((prev) => [
//   //         ...prev,
//   //         ...newUrls.filter((url) => !prev.includes(url)),
//   //       ]);
//   //     } catch (error) {
//   //       console.error("Error fetching images:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []); // 빈 배열로 의존성 배열 설정

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const fileRef = ref(storage, "webuilder/");
//         const result = await listAll(fileRef);
//         const newUrls = await Promise.all(
//           result.items.map(async (item) => {
//             const url = await getDownloadURL(item);
//             return url;
//           })
//         );

//         // 기존 상태에 없는 새로운 URL만 추가
//         setImgWebuilder((prev) => [
//           ...prev,
//           ...newUrls.filter((url) => !prev.includes(url)),
//         ]);
//       } catch (error) {
//         console.error("Error fetching images:", error);
//       }
//     };

//     const fetchWebuilderDetail = async () => {
//       try {
//         // Information 컬렉션의 webuilderDetail 서브컬렉션 가져오기
//         const detailCollectionImplementationRef = collection(
//           db,
//           "Information",
//           "webuilderDetail",
//           "Implementation"
//         );
//         const detailCollectionInformationRef = collection(
//           db,
//           "Information",
//           "webuilderDetail",
//           "Information"
//         );
//         const detailCollectionProjectIntroductionRef = collection(
//           db,
//           "Information",
//           "webuilderDetail",
//           "ProjectIntroduction"
//         );
//         const detailCollectionremembranceRef = collection(
//           db,
//           "Information",
//           "webuilderDetail",
//           "remembrance"
//         );

//         // webuilderDetail 서브컬렉션의 문서들 가져오기
//         const implementationSnapshot = await getDocs(
//           detailCollectionImplementationRef
//         );
//         const informationSnapshot = await getDocs(
//           detailCollectionInformationRef
//         );
//         const projectIntroductionSnapshot = await getDocs(
//           detailCollectionProjectIntroductionRef
//         );
//         const remembranceSnapshot = await getDocs(
//           detailCollectionremembranceRef
//         );
//         // 가져온 데이터 사용
//         const implementationData = implementationSnapshot.docs.map((doc) =>
//           doc.data()
//         );
//         const informationData = informationSnapshot.docs.map((doc) =>
//           doc.data()
//         );
//         const projectIntroductionData = projectIntroductionSnapshot.docs.map(
//           (doc) => doc.data()
//         );
//         const remembranceData = remembranceSnapshot.docs.map((doc) =>
//           doc.data()
//         );

//         // 상태에 데이터 담기
//         setImplementation(() => implementationData);
//         setInformation(() => informationData);
//         setProjectIntroduction(() => projectIntroductionData);
//         setRemembrance(() => remembranceData);

//         // 여기서 로그 출력
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     // fetchData 호출
//     fetchData();

//     // fetchWebuilderDetail 호출
//     fetchWebuilderDetail();
//   }, []); // 빈 배열로 의존성 배열 설정

//   console.log("imgWebuilder ===>", imgWebuilder);
//   console.log("implementation ===>", implementation);
//   console.log("information ===>", information);
//   console.log("remembrance ===>", remembrance);
//   console.log("projectIntroduction ===>", projectIntroduction);
//   return (
//     <>
//       <div className=" p-7 mt-20 mb-10 mx-auto  rounded-lg  w-4/6 border border-solid border-gray-100 border-opacity-30">
//         <div className="flex">
//           <div className="mr-4 pt-1">
//             <div>
//               <div className="end-box">
//                 <button className="items-center justify-center">
//                   <div
//                     className="id"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       fill: "#c3c3c3",
//                     }}
//                   >
//                     <img
//                       id="img"
//                       draggable="false"
//                       className="style-scope yt-img-shadow rounded-full"
//                       alt="아바타 이미지"
//                       height="32"
//                       width="32"
//                       src="https://yt3.googleusercontent.com/ytc/APkrFKaUAGg1uQnpiLKIQlq9iYUCDWZ_gEXWz4zTDRZQ_ROaoj-XHeNE7ojO1XsbCYq_=s88-c-k-c0x00ffffff-no-rj"
//                     />
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col ">
//             <Typography color="white" level="h3">
//               정보
//             </Typography>

//             <section className="container mx-auto py-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Typography color="white" level="h5">
//                     기간
//                   </Typography>
//                   <Typography color="white" level="body-sm">
//                     January 2024 - Present
//                   </Typography>
//                 </div>
//                 <div>
//                   <Typography color="white" level="h5">
//                     담당 파트
//                   </Typography>
//                   <Typography color="white" level="body-sm">
//                     John Doe
//                   </Typography>
//                 </div>
//                 <div>
//                   <Typography color="white" level="h5">
//                     현황
//                   </Typography>
//                   <Typography color="white" level="body-sm">
//                     On-going
//                   </Typography>
//                 </div>
//                 <div>
//                   <Typography color="white" level="h5">
//                     참가인원
//                   </Typography>
//                   <Typography color="white" level="body-sm">
//                     Team A, Team B
//                   </Typography>
//                 </div>
//                 <div>
//                   <Typography color="white" level="h5">
//                     기여도
//                   </Typography>
//                   <Typography color="white" level="body-sm">
//                     Frontend Development, Backend Development
//                   </Typography>
//                 </div>
//                 <div>
//                   <Typography color="white" level="h5">
//                     개발 환경
//                   </Typography>
//                   <Typography color="white" level="body-sm">
//                     React, Node.js, Express.js, MongoDB
//                   </Typography>
//                 </div>
//               </div>
//             </section>
//             <div className="-ml-4 flex items-center">
//               <div className="flex mr-2">
//                 <div
//                   style={{
//                     width: "24px",
//                     height: "24px",
//                     fill: "currentcolor",
//                   }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     enableBackground="new 0 0 24 24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     width="24"
//                     focusable="false"
//                     style={{
//                       pointerEvents: "none",
//                       display: "block",
//                       width: "100%",
//                       height: "100%",
//                     }}
//                   >
//                     <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
//                   </svg>
//                 </div>
//                 <Typography color="white" level="body-md" className="pl-1">
//                   356
//                 </Typography>
//               </div>
//               <div className="flex">
//                 <div
//                   style={{
//                     width: "24px",
//                     height: "24px",
//                     fill: "currentcolor",
//                   }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     width="24"
//                     focusable="false"
//                     style={{
//                       pointerEvents: "none",
//                       display: "block",
//                       width: "100%",
//                       height: "100%",
//                     }}
//                   >
//                     <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
//                   </svg>
//                 </div>
//                 <Typography color="white" level="body-md" className="pl-1">
//                   0
//                 </Typography>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className=" p-7 mb-10 mx-auto  rounded-lg  w-4/6 border border-solid border-gray-100 border-opacity-30">
//         <div className="flex">
//           <div className="mr-4 pt-1">
//             <div>
//               <div className="end-box">
//                 <button className="items-center justify-center">
//                   <div
//                     className="id"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       fill: "#c3c3c3",
//                     }}
//                   >
//                     <img
//                       id="img"
//                       draggable="false"
//                       className="style-scope yt-img-shadow rounded-full"
//                       alt="아바타 이미지"
//                       height="32"
//                       width="32"
//                       src="https://yt3.googleusercontent.com/ytc/APkrFKaUAGg1uQnpiLKIQlq9iYUCDWZ_gEXWz4zTDRZQ_ROaoj-XHeNE7ojO1XsbCYq_=s88-c-k-c0x00ffffff-no-rj"
//                     />
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col ">
//             <Typography color="white" level="h3">
//               프로젝트 소개
//             </Typography>
//             <section className="container mx-auto py-4">
//               <Typography color="white" level="h4">
//                 BOM은메디컬포터블디바이스및웹모니터링서비스입니다.
//               </Typography>
//               <Typography
//                 color="white"
//                 level="body-sm"
//                 style={{ marginTop: 10 }}
//               >
//                 디바이스에서BMS로배터리상태를체크하고,
//                 산소포화도및온도센서를통해환자의생체신호를수집합니다.
//                 병동에서는수집된데이터들을시계열로파악할수있고,
//                 엑셀다운로드를가능하게만들었고,
//                 모바일디바이스에서환자번호로로그인하면가족들도환자의상태
//                 를체크할수있습니다.
//               </Typography>
//             </section>
//             <div className="-ml-4 flex items-center">
//               <div className="flex mr-2">
//                 <div
//                   style={{
//                     width: "24px",
//                     height: "24px",
//                     fill: "currentcolor",
//                   }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     enableBackground="new 0 0 24 24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     width="24"
//                     focusable="false"
//                     style={{
//                       pointerEvents: "none",
//                       display: "block",
//                       width: "100%",
//                       height: "100%",
//                     }}
//                   >
//                     <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
//                   </svg>
//                 </div>
//                 <Typography color="white" level="body-md" className="pl-1">
//                   203
//                 </Typography>
//               </div>
//               <div className="flex">
//                 <div
//                   style={{
//                     width: "24px",
//                     height: "24px",
//                     fill: "currentcolor",
//                   }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     width="24"
//                     focusable="false"
//                     style={{
//                       pointerEvents: "none",
//                       display: "block",
//                       width: "100%",
//                       height: "100%",
//                     }}
//                   >
//                     <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
//                   </svg>
//                 </div>
//                 <Typography color="white" level="body-md" className="pl-1">
//                   0
//                 </Typography>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className=" p-7 mb-10 mx-auto  rounded-lg  w-4/6 border border-solid border-gray-100 border-opacity-30">
//         <div className="flex">
//           <div className="mr-4 pt-1">
//             <div>
//               <div className="end-box">
//                 <button className="items-center justify-center">
//                   <div
//                     className="id"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       fill: "#c3c3c3",
//                     }}
//                   >
//                     <img
//                       id="img"
//                       draggable="false"
//                       className="style-scope yt-img-shadow rounded-full"
//                       alt="아바타 이미지"
//                       height="32"
//                       width="32"
//                       src="https://yt3.googleusercontent.com/ytc/APkrFKaUAGg1uQnpiLKIQlq9iYUCDWZ_gEXWz4zTDRZQ_ROaoj-XHeNE7ojO1XsbCYq_=s88-c-k-c0x00ffffff-no-rj"
//                     />
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col ">
//             <Typography color="white" level="h3">
//               구현 사항
//             </Typography>
//             <section className="container mx-auto py-4">
//               <Typography color="white" level="h4">
//                 BOM은메디컬포터블디바이스및웹모니터링서비스입니다.
//               </Typography>
//               <Typography
//                 color="white"
//                 level="body-sm"
//                 style={{ marginTop: 10 }}
//               >
//                 디바이스에서BMS로배터리상태를체크하고,
//                 산소포화도및온도센서를통해환자의생체신호를수집합니다.
//                 병동에서는수집된데이터들을시계열로파악할수있고,
//                 엑셀다운로드를가능하게만들었고,
//                 모바일디바이스에서환자번호로로그인하면가족들도환자의상태
//                 를체크할수있습니다.
//               </Typography>
//             </section>
//             <div className="flex items-center justify-center">
//               <Wrapper>
//                 {/* 앱솔루트로 이미지 사이즈 잡고 다시 넣어야됨! right , left*/}
//                 <PrevNextBtn
//                   onClick={prevPlease}
//                   className="flex flex-col items-center justify-center "
//                 >
//                   <div
//                     style={{
//                       width: "24px",
//                       height: "24px",
//                       fill: "currentcolor",
//                     }}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       width="24"
//                       focusable="false"
//                       style={{
//                         pointerEvents: "none",
//                         display: "block",
//                         width: "100%",
//                         height: "100%",
//                       }}
//                     >
//                       <path d="M14.96 18.96 8 12l6.96-6.96.71.71L9.41 12l6.25 6.25-.7.71z"></path>
//                     </svg>
//                   </div>
//                 </PrevNextBtn>
//                 <SlideWrap>
//                   <AnimatePresence custom={back}>
//                     <Box
//                       custom={back}
//                       variants={boxVariants}
//                       src={imgWebuilder[imageIndex]}
//                       initial="entry"
//                       animate="center"
//                       exit="exit"
//                       key={visible}
//                     />
//                   </AnimatePresence>
//                 </SlideWrap>
//                 <PrevNextBtn
//                   onClick={nextPlease}
//                   className="flex flex-col items-center justify-center "
//                 >
//                   <div
//                     style={{
//                       width: "24px",
//                       height: "24px",
//                       fill: "currentcolor",
//                     }}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       width="20"
//                       focusable="false"
//                       style={{
//                         pointerEvents: "none",
//                         display: "block",
//                         width: "100%",
//                         height: "100%",
//                       }}
//                     >
//                       <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
//                     </svg>
//                   </div>
//                 </PrevNextBtn>
//               </Wrapper>
//             </div>

//             <div className="-ml-4 flex items-center">
//               <div className="flex mr-2">
//                 <div
//                   style={{
//                     width: "24px",
//                     height: "24px",
//                     fill: "currentcolor",
//                   }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     enableBackground="new 0 0 24 24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     width="24"
//                     focusable="false"
//                     style={{
//                       pointerEvents: "none",
//                       display: "block",
//                       width: "100%",
//                       height: "100%",
//                     }}
//                   >
//                     <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
//                   </svg>
//                 </div>
//                 <Typography color="white" level="body-md" className="pl-1">
//                   203
//                 </Typography>
//               </div>
//               <div className="flex">
//                 <div
//                   style={{
//                     width: "24px",
//                     height: "24px",
//                     fill: "currentcolor",
//                   }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     width="24"
//                     focusable="false"
//                     style={{
//                       pointerEvents: "none",
//                       display: "block",
//                       width: "100%",
//                       height: "100%",
//                     }}
//                   >
//                     <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
//                   </svg>
//                 </div>
//                 <Typography color="white" level="body-md" className="pl-1">
//                   0
//                 </Typography>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className=" p-7 mb-10 mx-auto  rounded-lg  w-4/6 border border-solid border-gray-100 border-opacity-30">
//         <div className="flex">
//           <div className="mr-4 pt-1">
//             <div>
//               <div className="end-box">
//                 <button className="items-center justify-center">
//                   <div
//                     className="id"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       fill: "#c3c3c3",
//                     }}
//                   >
//                     <img
//                       id="img"
//                       draggable="false"
//                       className="style-scope yt-img-shadow rounded-full"
//                       alt="아바타 이미지"
//                       height="32"
//                       width="32"
//                       src="https://yt3.googleusercontent.com/ytc/APkrFKaUAGg1uQnpiLKIQlq9iYUCDWZ_gEXWz4zTDRZQ_ROaoj-XHeNE7ojO1XsbCYq_=s88-c-k-c0x00ffffff-no-rj"
//                     />
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col ">
//             <Typography color="white" level="h3">
//               회고
//             </Typography>
//             <section className="container mx-auto py-4">
//               <Typography color="white" level="h4">
//                 BOM은메디컬포터블디바이스및웹모니터링서비스입니다.
//               </Typography>
//               <Typography
//                 color="white"
//                 level="body-sm"
//                 style={{ marginTop: 10 }}
//               >
//                 디바이스에서BMS로배터리상태를체크하고,
//                 산소포화도및온도센서를통해환자의생체신호를수집합니다.
//                 병동에서는수집된데이터들을시계열로파악할수있고,
//                 엑셀다운로드를가능하게만들었고,
//                 모바일디바이스에서환자번호로로그인하면가족들도환자의상태
//                 를체크할수있습니다.
//               </Typography>
//             </section>
//             <div className="-ml-4 flex items-center">
//               <div className="flex mr-2">
//                 <div
//                   style={{
//                     width: "24px",
//                     height: "24px",
//                     fill: "currentcolor",
//                   }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     enableBackground="new 0 0 24 24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     width="24"
//                     focusable="false"
//                     style={{
//                       pointerEvents: "none",
//                       display: "block",
//                       width: "100%",
//                       height: "100%",
//                     }}
//                   >
//                     <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
//                   </svg>
//                 </div>
//                 <Typography color="white" level="body-md" className="pl-1">
//                   203
//                 </Typography>
//               </div>
//               <div className="flex">
//                 <div
//                   style={{
//                     width: "24px",
//                     height: "24px",
//                     fill: "currentcolor",
//                   }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     width="24"
//                     focusable="false"
//                     style={{
//                       pointerEvents: "none",
//                       display: "block",
//                       width: "100%",
//                       height: "100%",
//                     }}
//                   >
//                     <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
//                   </svg>
//                 </div>
//                 <Typography color="white" level="body-md" className="pl-1">
//                   0
//                 </Typography>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//     // <div className="my-20 mx-auto rounded-lg w-4/6 h-full border border-solid border-gray-300 opacity-30"></div>
//     // <div className="mt-24 bg-black text-white">
//     //   <section className="w-full h-[700px] relative">
//     //     <img
//     //       className="absolute left-0 top-0 w-full h-[500px] object-contain"
//     //       src="https://i.ytimg.com/vi/MJyadEmZVJ8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfBxUH_J9WpSnHNl15TqM0dFsg_w"
//     //       style={{
//     //         aspectRatio: "700/500",
//     //       }}
//     //       alt="123"
//     //     />
//     //     <div className="absolute left-14 top-80 h-64 w-64 bg-white bg-opacity-50 flex items-center justify-center">
//     //       <h1 className="text-3xl font-bold text-white">Project Name</h1>
//     //     </div>
//     //   </section>
//     //   <section className="container mx-auto px-4 py-12">
//     //     <h2 className="text-3xl font-bold mb-4">정보</h2>
//     //     <div className="grid grid-cols-2 gap-4">
//     //       <div>
//     //            <Typography color="white" level="body-sm">기간</typography>
//     //         <p>January 2024 - Present</p>
//     //       </div>
//     //       <div>
//     //            <Typography color="white" level="body-sm">담당 파트</typography>
//     //         <p>John Doe</p>
//     //       </div>
//     //       <div>
//     //            <Typography color="white" level="body-sm">현황</typography>
//     //         <p>On-going</p>
//     //       </div>
//     //       <div>
//     //            <Typography color="white" level="body-sm">참가인원</typography>
//     //         <p>Team A, Team B</p>
//     //       </div>
//     //       <div>
//     //            <Typography color="white" level="body-sm">기여도</typography>
//     //         <p>Frontend Development, Backend Development</p>
//     //       </div>
//     //       <div>
//     //            <Typography color="white" level="body-sm">개발 환경</typography>
//     //         <p>React, Node.js, Express.js, MongoDB</p>
//     //       </div>
//     //     </div>
//     //   </section>
//     //   <section className="container mx-auto px-4 py-12">
//     //     <h2 className="text-3xl font-bold mb-4">프로젝트 소개</h2>
//     //     <p className="text-lg">
//     //       This project is a web application that provides a platform for users
//     //       to share and discover new music. Users can create their own playlists,
//     //       follow other users, and explore trending music. The application also
//     //       includes a recommendation system that suggests songs based on the
//     //       user's listening history.
//     //     </p>
//     //   </section>
//     //   <section className="container mx-auto px-4 py-12">
//     //     <h2 className="text-3xl font-bold mb-4">구현 사항</h2>
//     //     <div className="grid grid-cols-2 gap-4">
//     //       <div>
//     //         <img
//     //           className="w-full h-[200px] object-contain rounded-md"
//     //           src="https://i.ytimg.com/vi/MJyadEmZVJ8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfBxUH_J9WpSnHNl15TqM0dFsg_w"
//     //           style={{ aspectRatio: "200 / 200" }}
//     //           alt="123"
//     //         />
//     //         <p className="mt-2">
//     //           User authentication was implemented using JWT.
//     //         </p>
//     //       </div>
//     //       <div>
//     //         <img
//     //           className="w-full h-[200px] object-contain rounded-md"
//     //           src="https://i.ytimg.com/vi/MJyadEmZVJ8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfBxUH_J9WpSnHNl15TqM0dFsg_w"
//     //           style={{ aspectRatio: "200 / 200" }}
//     //           alt="123"
//     //         />
//     //         <p className="mt-2">
//     //           The frontend was built using React and Tailwind CSS.
//     //         </p>
//     //       </div>
//     //     </div>
//     //   </section>
//     //   <section className="container mx-auto px-4 py-12">
//     //     <h2 className="text-3xl font-bold mb-4">회고</h2>
//     //     <div className="grid grid-cols-2 gap-4">
//     //       <div>
//     //         <p className="mt-2">
//     //           User authentication was implemented using JWT.
//     //         </p>
//     //       </div>
//     //       <div>
//     //         <p className="mt-2">
//     //           The frontend was built using React and Tailwind CSS.
//     //         </p>
//     //       </div>
//     //     </div>
//     //   </section>
//     // </div>
//   );
// };

// export default PortfolioItem;
