// import { RefObject } from "react";
// import { useDomEvent, MotionValue } from "framer-motion";
// import { spring } from "popmotion";
// import { mix } from "@popmotion/popcorn";
// import { debounce } from "lodash";
// // Interface definition
// const deltaThreshold = 5;
// const elasticFactor = 0.2;

// function springTo(value, from, to) {
//   if (value.isAnimating()) return;

//   value.start((complete) => {
//     const animation = spring({
//       from,
//       to,
//       velocity: value.getVelocity(),
//       stiffness: 400,
//       damping: 40,
//     }).start({
//       update: (v) => value.set(v),
//       complete,
//     });

//     return () => animation.stop();
//   });
// }

// // Use debounce from lodash
// const debouncedSpringTo = debounce(springTo, 100);

// // Interface definition
// export function useWheelScroll(ref, y, constraints, onWheelCallback, isActive) {
//   const onWheel = (event) => {
//     event.preventDefault();

//     const currentY = y.get();
//     let newY = currentY - event.deltaY;
//     let startedAnimation = false;
//     const isWithinBounds =
//       constraints && newY >= constraints.top && newY <= constraints.bottom;

//     if (constraints && !isWithinBounds) {
//       newY = mix(currentY, newY, elasticFactor);

//       if (newY < constraints.top) {
//         if (event.deltaY <= deltaThreshold) {
//           springTo(y, newY, constraints.top);
//           startedAnimation = true;
//         } else {
//           debouncedSpringTo(y, newY, constraints.top);
//         }
//       }

//       if (newY > constraints.bottom) {
//         if (event.deltaY >= -deltaThreshold) {
//           springTo(y, newY, constraints.bottom);
//           startedAnimation = true;
//         } else {
//           debouncedSpringTo(y, newY, constraints.bottom);
//         }
//       }
//     }

//     if (!startedAnimation) {
//       y.stop();
//       y.set(newY);
//     } else {
//       debouncedSpringTo.cancel();
//     }

//     onWheelCallback(event);
//   };

//   // Use framer-motion's useDomEvent
//   useDomEvent(ref, "wheel", isActive && onWheel, { passive: false });
// }
