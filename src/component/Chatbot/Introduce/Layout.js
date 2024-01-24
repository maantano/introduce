import * as React from "react";
import Box from "@mui/joy/Box";

function Main(props) {
  return (
    <Box
      component="main"
      className="Main"
      {...props}
      sx={[
        { p: 2, marginBottom: 4 },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

export default {
  Main,
};
