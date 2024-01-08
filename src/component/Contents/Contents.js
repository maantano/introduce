import Main from "./Main";
import Banner1 from "./Banner1";
import Video from "./video/Video";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/feature/inputSlice";
import { useEffect } from "react";
import Home from "./home/Home";

const Contents = () => {
  const dispatch = useDispatch();
  const currentIdx = useSelector((state) => state.currentReducer.index);
  const components = {
    0: <Home />,
    1: <Video />,
  };
  return (
    <div onClick={() => dispatch(reset())}>
      <Main />
      <Banner1 />
      {components[currentIdx]}
    </div>
  );
};

export default Contents;
