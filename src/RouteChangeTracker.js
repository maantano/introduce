// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import ReactGa from "react-ga4";

// const RouteChangeTracker = () => {
//   const location = useLocation();
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     if (!window.location.href.includes("localhost")) {
//       ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
//     }
//     setInit(true);
//   }, []);

//   useEffect(() => {
//     if (init) {
//       ReactGa._gaCommandSendPageview(location.pathname + location.search);
//     }
//   }, [init, location]);
// };
// export default RouteChangeTracker;
