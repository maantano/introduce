import Main from "./Main";
import Banner1 from "./Banner1";
import Study from "./study/Study";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/feature/inputSlice";
import { useEffect } from "react";
import Portfolio from "./portfolio/Portfolio";
import MyLife from "../../page/graph/MyLife";

const Contents = () => {
  const dispatch = useDispatch();
  const currentIdx = useSelector((state) => state.currentReducer.index);
  console.log("currentIdx ===>", currentIdx);
  const components = {
    0: <Portfolio />,
    1: <Study />,
    2: <MyLife />,
  };
  return (
    <div onClick={() => dispatch(reset())}>
      <Main />
      <Banner1 />
      <div className="p-3">{components[currentIdx]}</div>
    </div>
  );
};

export default Contents;
