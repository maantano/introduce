import React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Sheet from "@mui/joy/Sheet";
import Layout from "./Layout";
import myIcon from "../Image/myIcon.jpeg";

const IntroduceMyself = () => {
  return (
    <div className="text-black pb-3">
      <Layout.Main>
        <List
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 2,
          }}
        >
          <Sheet
            component="li"
            variant="outlined"
            sx={{
              borderRadius: "sm",
              p: 2,
              listStyle: "none",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Avatar
                variant="outlined"
                src={myIcon}
                srcSet={`${myIcon} 2x`}
                sx={{ borderRadius: "50%" }}
              />
              <div>
                <Typography level="title-md">{"민경언"}</Typography>
                <Typography level="body-xs">{"maantano@gmail.com"}</Typography>
              </div>
            </Box>
            <Divider component="div" />
            <List sx={{ "--ListItemDecorator-size": "60px" }}>
              <ListItem
                sx={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <List sx={{ flexDirection: "row" }}>
                  <ListItemDecorator
                    sx={{
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        height: "80%",
                        width: "1px",
                        bgcolor: "divider",
                        left: "calc(var(--ListItem-paddingLeft) + 12px)",
                        top: "15%",
                      },
                    }}
                  ></ListItemDecorator>
                  <List sx={{ flexDirection: "column", ml: 4, mt: 2 }}>
                    <ListItemContent sx={{ mt: 0 }}>
                      <Typography level="title-sm" sx={{ mb: 1 }}>
                        {"경력 3년차"}
                        <br /> {"(2019.07.01 - 2023.03.24)"}
                      </Typography>
                      <Typography level="body-xs" sx={{ mb: 1 }}>
                        {"SQLD 자격증 취득"}
                      </Typography>
                      <Typography level="body-xs" sx={{ mb: 1 }}>
                        {"OCP11g 자격증 취득"}
                      </Typography>
                      <Typography level="body-xs" sx={{ mb: 1 }}>
                        {"정보처리기사 자격증 취득"}
                      </Typography>
                    </ListItemContent>
                  </List>
                </List>
                <Divider component="div" sx={{ mt: 2, mb: 0 }} />
              </ListItem>
            </List>
          </Sheet>
        </List>
      </Layout.Main>
    </div>
  );
};

export default IntroduceMyself;
