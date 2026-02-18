import Main from "./Main";
import Banner1 from "./Banner1";
import Study from "./study/Study";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/feature/inputSlice";
import { useEffect } from "react";
import Portfolio from "./portfolio/Portfolio";
import MyLife from "./graph/MyLife";
import Career from "./career/Carrer";

const Contents = () => {
  const dispatch = useDispatch();
  const currentIdx = useSelector((state) => state.currentReducer.index);

  const components = {
    0: <Portfolio />,
    1: <MyLife />,
    2: <Career />,
  };

  // const components = {
  //   0: <Portfolio />,
  //   1: <Study />,
  //   2: <MyLife />,
  //   3: <Career />,
  // };
  return (
    <div onClick={() => dispatch(reset())}>
      <Main />
      <Banner1 />
      <div className="p-3">{components[currentIdx]}</div>
    </div>
  );
};

export default Contents;
