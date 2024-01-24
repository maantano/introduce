// 커스텀한 코드
import styled from "styled-components";
import { ResponsiveLine } from "@nivo/line";
import { useState } from "react";

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
                      overflow: "hidden",
                      transition: "opacity 1s",
                    }}
                    className="flex flex-col"
                  >
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
