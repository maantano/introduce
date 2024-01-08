// import React from "react";

// const MessageParser = ({ children, actions }) => {
//   const parse = (message) => {
//     if (message.includes("hello")) {
//       console.log("hi");
//     }
//   };

//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           parse: parse,
//           actions: {},
//         });
//       })}
//     </div>
//   );
// };

// export default MessageParser;
// in MessageParser.js
import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowercase = message.toLowerCase();
    if (message.includes("hello")) {
      actions.handleHello();
    }

    if (message.includes("dog")) {
      actions.handleDog();
    }
    if (message.includes("다시 시작")) {
      actions.optionShow();
    }
    // if (lowercase.includes("javascript") || lowercase.includes("js")) {
    // 	this.actionProvider.handleJavascriptQuiz();
    //   }
    if (lowercase.includes("javascript") || lowercase.includes("js")) {
      actions.handleJavascriptQuiz();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;

// class MessageParser {
//   constructor(actionProvider, state) {
//     this.actionProvider = actionProvider;
//     this.state = state;
//   }

//   parse(message) {
//     console.log(message);
//   }
// }

// export default MessageParser;
