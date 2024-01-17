// 커스텀한 코드
import styled from "styled-components";
import { ResponsiveLine } from "@nivo/line";
import ImageSlide from "./ImageSlide";
import { useState } from "react";

const Graph = ({ data, unit, color }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  return (
    <>
      <GraphWrapper>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          //   curve="monotoneX"

          yFormat=" >+.2s"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Years",
            legendOffset: 36,
            legendPosition: "middle",
            tickValues: 10,
            top: 200,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Score",
            color: "red",
            legendOffset: -50,
            legendPosition: "middle",
          }}
          enableGridX={false}
          enableGridY={false}
          colors={"#ffffff"}
          lineWidth={2}
          pointSize={16}
          pointColor="#ffffff"
          pointBorderWidth={3}
          pointBorderColor={"black"}
          pointLabel="xFormatted"
          pointLabelYOffset={-12}
          crosshairType="bottom"
          onMouseLeave={() => {
            console.log("out!!");
          }}
          onMouseEnter={() => {
            console.log("in!!");
          }}
          tooltip={({ point }) => {
            console.log(point);
            return (
              <>
                {point.index ? (
                  <div
                    style={{
                      background: "black",
                      padding: "9px 12px",
                      border: "1px solid #3f3f3f",
                      borderRadius: 10,
                      position: "absolute",
                      top: 50,
                      left: -300,
                    }}
                  >
                    <div className="inline-block font-bold mb-4 p-3 bg-red-600 rounded-lg">
                      {point.data.x}
                    </div>
                    <div className="w-[250px]">{point.data.title}</div>
                    <img src={point.data.thumb} alt={point.data.thumb} />
                    {/* <ImageSlide data={point.data.thumb} /> */}
                  </div>
                ) : (
                  ""
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
  /* width: 100%; */
  width: 1100px;
`;
