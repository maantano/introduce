import React from "react";
import Main from "../../component/Contents/Main";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/feature/inputSlice";
import NavMenu from "../../component/Nav/NavMenu";
import PortfolioItem from "./PortfolioItem";
import styled from "styled-components";
const Wrap = styled.div`
  margin-top: 30px;
  height: 50px;
  border-top: 1px solid #3f3f3f;
`;

const PortfolioDetail = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex">
      <>
        <NavMenu />
        <main className="w-full mt-11 p-5 flex">
          <div className="flex flex-col">
            <div onClick={() => dispatch(reset())}>
              <Main />
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
