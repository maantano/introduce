// 커스텀한 코드
import styled from "styled-components";
import { ResponsiveLine } from "@nivo/line";
import ImageSlide from "./ImageSlide";
import { useEffect, useState } from "react";
import { Typography } from "@mui/joy";

const Graph = ({ data }) => {
  const [toolShow, setToolShow] = useState(false);

  return (
    <>
      <GraphWrapper>
        <ResponsiveLine
          data={data}
          curve="cardinal"
          margin={{ top: 50, right: 50, bottom: 120, left: 100 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          // yFormat=" >+.2s"
          yFormat=".2s"
          axisTop={null}
          axisRight={null}
          theme={{
            axis: {
              legend: {
                text: {
                  fontSize: 20,
                  fill: "#ccc",
                },
              },
              ticks: {
                text: {
                  fontSize: 20,
                  fill: "#ccc",
                },
              },
            },
          }}
          // onMouseMove={() => {
          //   console.log("onMouseMove ????");
          // }}
          onMouseLeave={() => {
            setToolShow(() => false);
          }}
          onMouseEnter={() => {
            setTimeout(() => {
              setToolShow(() => true);
            }, 10);
          }}
          axisBottom={{
            color: "red",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Years",
            legendOffset: 100,
            legendPosition: "middle",
            tickValues: 10,
            top: 200,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Happy",
            legendOffset: -80,
            legendPosition: "middle",
          }}
          enableGridX={false}
          enableGridY={false}
          colors={"#3f3f3f"}
          lineWidth={2}
          pointSize={8}
          pointColor="#3f3f3f"
          pointBorderWidth={2}
          pointBorderColor={"white"}
          pointLabel="xFormatted"
          pointLabelYOffset={-12}
          crosshairType="bottom"
          tooltip={({ point }) => {
            console.log(point.y);
            return (
              <>
                {point.index >= 1 && (
                  <div
                    style={{
                      opacity: toolShow ? 1 : 0,
                      background: "black",
                      padding: "9px 12px",
                      border: "1px solid #3f3f3f",
                      borderRadius: 10,
                      marginBottom: point.y < 200 ? "-450px" : "-300px",
                      marginLeft:
                        point.index >= 8 ? "calc(50% - 520px)" : "auto",
                      width: 600,
                      height: 600,
                      overflow: "hidden", // 스크롤이 생기지 않도록 함
                      transition: "opacity 1s", // 1초 동안 서서히 나타나는 효과
                    }}
                    className="flex flex-col"
                  >
                    {/* <div
                    style={{
                      position: "absolute",
                      opacity: toolShow ? 1 : 0,
                      background: "black",
                      padding: "9px 12px",
                      border: "1px solid #3f3f3f",
                      borderRadius: 10,
                      // marginRight: point.index >= 7 && 600,
                      left: point.index >= 5 && -600,
                      top: -100,
                      // left: -300,
                      width: 600,
                      height: 600,
                      transition: "opacity 0.5s", // 1초 동안 서서히 나타나는 효과
                    }}
                    className="flex flex-col"
                  > */}
                    <div className="inline-block font-bold mb-4 p-3 bg-red-600 rounded-lg w-[60px]">
                      {point.data.x}
                    </div>
                    <div className="w-full text-left px-2 text-2xl">
                      3줄요약
                    </div>

                    <div className="flex flex-col px-3 text-base">
                      <div className="w-full text-left ">
                        1. {point.data.title1}
                      </div>
                      <div className="w-full text-left ">
                        2. {point.data.title2}
                      </div>
                      <div className="w-full text-left">
                        3. {point.data.title3}
                      </div>
                    </div>
                    <img
                      style={{
                        width: "100%",
                        height: "65%",
                        objectFit: "contain",
                        marginTop: 20,
                      }}
                      src={point.data.thumb}
                      alt={point.data.thumb}
                    />
                  </div>
                )}
              </>
            );
          }}
          // tooltip={({ point }) => {
          //   return (
          //     <>
          //       {point.index ? (
          //         <div
          //           style={{
          //             opacity: toolShow ? 1 : 0,
          //             background: "black",
          //             padding: "9px 12px",
          //             border: "1px solid #3f3f3f",
          //             borderRadius: 10,
          //             marginRight: point.index === 9 && 200,
          //             width: 400,
          //             height: 400,
          //           }}
          //           className="flex flex-col"
          //         >
          //           <div className="inline-block font-bold mb-4 p-3 bg-red-600 rounded-lg w-[60px]">
          //             {point.data.x}
          //           </div>
          //           <div className="w-full text-left px-2">
          //             {point.data.title}
          //           </div>
          //           <img
          //             style={{
          //               width: "100%",
          //               height: "65%",
          //               objectFit: "contain",
          //               marginTop: 20,
          //             }}
          //             src={point.data.thumb}
          //             alt={point.data.thumb}
          //           />
          //           {/* <div className="w-full h-[50px] m-4">
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
          //                 <Typography
          //                   color="white"
          //                   level="body-md"
          //                   className="pl-1"
          //                 >
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
          //                 <Typography
          //                   color="white"
          //                   level="body-md"
          //                   className="pl-1"
          //                 >
          //                   0
          //                 </Typography>
          //               </div>
          //             </div>
          //           </div> */}
          //         </div>
          //       ) : (
          //         ""
          //       )}
          //     </>
          //   );
          // }}
          useMesh={true}
        />
      </GraphWrapper>
    </>
  );
};

export default Graph;

const GraphWrapper = styled.div`
  padding: 10px;
  height: 700px;
  width: 1200px;
`;
