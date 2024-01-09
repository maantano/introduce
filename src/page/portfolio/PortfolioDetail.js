import React from "react";
import Main from "../../component/Contents/Main";
import Banner1 from "../../component/Contents/Banner1";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/feature/inputSlice";
import NavMenu from "../../component/Nav/NavMenu";
import PortfolioItem from "./PortfolioItem";
import styled from "styled-components";
const Wrap = styled.div`
  margin-top: 30px;
  /* display: flex;
  justify-content: flex-start;
  align-items: center; */
  height: 50px;
  border-top: 1px solid #3f3f3f;
`;
const PortfolioTitle = styled.div``;

const PortfolioDetail = () => {
  const dispatch = useDispatch();
  const currentIdx = useSelector((state) => state.currentReducer.index);

  return (
    <div className="flex">
      <>
        <NavMenu />
        <main className="w-full mt-11 p-5 flex">
          <div className="flex flex-col">
            <div onClick={() => dispatch(reset())}>
              <Main />
              {/* <Banner1 /> */}

              <Wrap>
                <div className="p-12">
                  <h1 className="text-2xl font-bold text-white">위빌더</h1>
                </div>
              </Wrap>
              <PortfolioItem />
            </div>
          </div>
        </main>
      </>
    </div>
  );
};

export default PortfolioDetail;
