import React, { useState } from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Chip from "@mui/joy/Chip";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Sheet from "@mui/joy/Sheet";

import webuilderLogo from "../../../asset/webuilder/main_visual_text_01.png";
import proterzoneLogo from "../../../asset/porterzone/porterzoneLogo.png";
import platformLogo from "../../../asset/platform/platform-logo.png";
// import proterzoneLogo from "../../../asset/poterzone/porterzoneLogo.png";

import Layout from "./Layout";
import myIcon from "../Image/myIcon.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  chatbotReset,
  chatbotTogle,
} from "../../../redux/feature/chatbotSlice";

const IntroducePortfolio = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,

      behavior: "instant",
    });
  };

  const handleLinkClick = (to) => (event) => {
    event.preventDefault();
    scrollToTop();
    navigate(to);
    console.log("dispatch(chatbotTogle()) ===>");
    dispatch(chatbotTogle());
  };

  const peopleData = [
    {
      name: "민경언",
      position: "Frontend Developer",
      companyData: [
        {
          role: "WE빌더서비스",
          name: "홈페이지 & 쇼핑몰 사이트 제작 웹 에디터(B2C)",
          logo: webuilderLogo,
          years: "2021.02~2023.03",
          skills: ["javascript", "jquery", "html", "css", "php", "..."],
          link: "webuilder",
        },
        {
          role: "더 포터존",
          name: "이커머스 플랫폼(B2B) & MRO",
          logo: proterzoneLogo,
          years: "2021.02~2023.03",
          skills: [
            "react",
            "redux-toolkit",
            "javascript",
            "styled-component",
            "...",
          ],
          link: "porterzone",
        },
        {
          role: "플랫폼개발 Unit",
          name: "구축",
          logo: platformLogo,
          years: "2019.07~2021.02",
          skills: [
            "react",
            "redux-toolkit",
            "javascript",
            "html",
            "css",
            "...",
          ],
          link: "platform",
        },
        {
          role: "개인 프로젝트",
          name: "카드 추천 서비스",

          years: "2023.09~2023.10",
          skills: [
            "react",
            "redux-toolkit",
            "node",
            "firebase",
            "python",
            "...",
          ],
          link: "cardrecommend",
        },
      ],
    },
  ];
  return (
    <div className="text-black mb-16">
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
                  //   <Link to={company.link}>
                  <Link
                    href={company.link}
                    onClick={handleLinkClick(company.link)}
                    key={companyIndex}
                  >
                    <ListItem
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
                          {company.logo ? (
                            <Avatar
                              src={company.logo}
                              sx={{
                                bgcolor: "black",
                                "--Avatar-size": "50px",
                                img: {
                                  objectFit: "contain",
                                },
                              }}
                            />
                          ) : (
                            <Typography
                              sx={{
                                "--Avatar-size": "50px",
                                padding: "10px",
                                color: "black",
                                img: {
                                  objectFit: "contain",
                                },
                                marginBottom: 3,
                              }}
                              level="title-md"
                            >
                              개인
                            </Typography>
                          )}
                          {/* <Avatar
                             src={company.logo}
                             sx={{
                               bgcolor: "black",
                               "--Avatar-size": "50px",
                               img: {
                                 objectFit: "contain",
                               },
                             }}
                           /> */}
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
                      {/* ======================== */}
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
                  </Link>
                ))}
              </List>

              {/* <Button
					size="sm"
					variant="plain"
					endDecorator={
					  <KeyboardArrowRightRoundedIcon fontSize="small" />
					}
					sx={{ px: 1, mt: 1 }}
				  >
					Expand
				  </Button> */}
              {/* <Divider component="div" sx={{ mt: 5, mb: 2 }} />
				  <Typography level="title-sm">Skills tags:</Typography>
				  <Box sx={{ mt: 1.5, display: "flex", gap: 1 }}>
					{person.skills.map((skill, skillIndex) => (
					  <Chip
						key={skillIndex}
						variant="outlined"
						color="neutral"
						size="sm"
					  >
						{skill}
					  </Chip>
					))}
				  </Box> */}
            </Sheet>
          ))}
        </List>
      </Layout.Main>
    </div>
  );
};
export default IntroducePortfolio;
