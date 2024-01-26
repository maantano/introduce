import React, { useState } from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Sheet from "@mui/joy/Sheet";
import Layout from "./Layout";
import myIcon from "../Image/myIcon.jpeg";

const IntroduceDetail = () => {
  const peopleData = [
    {
      name: "민경언",
      position: "Frontend Developer",
      companyData: [
        {
          role: "구축 및 운영",
          name: "더존 비즈온",
          logo:
            "https://logo-resources.thevc.kr/organizations/80x80/eec710925266514764e07ce4b1602ae03cf2dbbc199fee65cf34b13c16f79d57_1569838816888626.jpg",
          years: "2019-2022",
          skills: ["html5", "css3", "js", "jquery", "php", "..."],
        },
        {
          role: "프론트엔드 개발 및 운영",
          name: "더존 비엔에프",
          logo:
            "https://logo-resources.thevc.kr/organizations/80x80/eec710925266514764e07ce4b1602ae03cf2dbbc199fee65cf34b13c16f79d57_1569838816888626.jpg",
          years: "2022-2023",
          skills: [
            "js",
            "react",
            "styled-components",
            "redux",
            "linux",
            "docker",
            "...",
          ],
        },
      ],
    },
  ];
  return (
    <div className="text-black pb-3">
      {" "}
      <Layout.Main>
        <List
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 2,
          }}
        >
          {peopleData.map((person, index) => (
            <Sheet
              key={index}
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
                  <Typography level="title-md">{person.name}</Typography>
                  <Typography level="body-xs">{person.position}</Typography>
                </div>
              </Box>
              <Divider component="div" />
              <List sx={{ "--ListItemDecorator-size": "60px" }}>
                {person.companyData.map((company, companyIndex) => (
                  <ListItem
                    key={companyIndex}
                    sx={{ flexDirection: "column", alignItems: "flex-start" }}
                  >
                    <List sx={{ flexDirection: "row" }}>
                      <ListItemDecorator
                        sx={{
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            height: "50%",
                            width: "1px",
                            bgcolor: "divider",
                            left: "calc(var(--ListItem-paddingLeft) + 12px)",
                            top: "50%",
                          },
                        }}
                      >
                        <Avatar
                          src={company.logo}
                          sx={{ "--Avatar-size": "50px" }}
                        />
                      </ListItemDecorator>
                      <List sx={{ flexDirection: "column", ml: 4, mt: 2 }}>
                        <ListItemContent sx={{ mt: 0 }}>
                          <Typography level="title-sm">
                            {company.role}
                          </Typography>
                          <Typography level="body-xs">
                            {company.name}
                          </Typography>
                        </ListItemContent>
                        <Typography level="body-xs" sx={{ mt: 1 }}>
                          {company.years}
                        </Typography>
                      </List>
                    </List>
                    <Box sx={{}}>
                      <Typography level="title-sm">Skills tags:</Typography>
                      <Box sx={{ width: 250, mt: 1.5 }}>
                        {company.skills.map((skill, skillIndex) => (
                          <Chip
                            sx={{ m: 0.5 }}
                            key={skillIndex}
                            variant="outlined"
                            color="neutral"
                            size="sm"
                          >
                            {skill}
                          </Chip>
                        ))}
                      </Box>
                    </Box>
                    <Divider component="div" sx={{ mt: 2, mb: 0 }} />
                  </ListItem>
                ))}
              </List>
            </Sheet>
          ))}
        </List>
      </Layout.Main>
    </div>
  );
};

export default IntroduceDetail;
