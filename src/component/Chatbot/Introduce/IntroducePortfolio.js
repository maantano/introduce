import React from "react";
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
import patternLogo from "../../../asset/patternMatching/patternLogo.png";
import shapeReviewLogo from "../../../asset/shapeReview/shapeReviewLogo.png";

import Layout from "./Layout";
import myIcon from "../Image/myIcon.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chatbotTogle } from "../../../redux/feature/chatbotSlice";

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
    dispatch(chatbotTogle());
  };

  const peopleData = [
    {
      name: "민경언",
      position: "Frontend Developer",
      companyData: [
        {
          role: "Pattern Matching",
          name: "AI 기반 ECG 데이터 차트 편집 에디터",
          logo: patternLogo,
          years: "2024.05~현재",
          skills: ["React", "TypeScript", "Redux", "styled-components", "..."],
          link: "patternmatching",
        },
        {
          role: "Shape Review",
          name: "파형 기반 ECG 데이터 편집",
          logo: shapeReviewLogo,
          years: "2024.05~현재",
          skills: ["React", "TypeScript", "Redux", "styled-components", "..."],
          link: "shapereview",
        },
        {
          role: "WE빌더서비스",
          name: "홈페이지 & 쇼핑몰 사이트 제작 웹 에디터(B2C)",
          logo: webuilderLogo,
          years: "2021.02~2023.03",
          skills: ["JavaScript", "jQuery", "HTML", "CSS", "PHP", "..."],
          link: "webuilder",
        },
        {
          role: "더 포터존",
          name: "이커머스 플랫폼(B2B) & MRO",
          logo: proterzoneLogo,
          years: "2021.02~2023.03",
          skills: ["React", "Redux", "JavaScript", "styled-components", "..."],
          link: "porterzone",
        },
        {
          role: "플랫폼개발 Unit",
          name: "구축",
          logo: platformLogo,
          years: "2019.07~2021.02",
          skills: ["React", "JavaScript", "HTML", "CSS", "..."],
          link: "platform",
        },
        {
          role: "개인 프로젝트",
          name: "RAG Document Search",
          years: "2025.01",
          skills: ["React", "TypeScript", "FastAPI", "OpenAI", "ChromaDB", "..."],
          link: "ragproject",
        },
        {
          role: "개인 프로젝트",
          name: "Maantano Ticker",
          years: "2024~현재",
          skills: ["Electron", "JavaScript", "Node.js", "..."],
          link: "maantanoticker",
        },
      ],
    },
  ];
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
                  </Link>
                ))}
              </List>
            </Sheet>
          ))}
        </List>
      </Layout.Main>
    </div>
  );
};
export default IntroducePortfolio;
