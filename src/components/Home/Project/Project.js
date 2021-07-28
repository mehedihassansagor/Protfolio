import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
} from "@material-ui/core";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { portfolio } from "./ProjectData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, {
  Navigation,
  Scrollbar,
  A11y,
  Pagination,
  Autoplay,
} from "swiper";
SwiperCore.use([Navigation, Scrollbar, A11y, Pagination, Autoplay]);

const Project = () => {
  return (
    <section className="project-section" id="portfolio">
      <Container maxWidth="lg">
        <h2 className="text-center">My Portfolio</h2>
        <Grid container>
          {portfolio.map((item, index) => (
            <Grid item lg={4} md={6} sm={12} xs={12} key={index}>
              <div className="project-container">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  autoplay={{ delay: 2000 }}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  {item.img &&
                    item.img.map((img) => (
                      <SwiperSlide>
                        <div className="text-container">
                          <img src={img} alt="img" className="reviewer-img" />
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
                <Accordion
                  style={{ backgroundColor: "#2A2C39", color: "#fff" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    View Details
                  </AccordionSummary>
                  <AccordionDetails>
                    <h3>Overview: </h3>
                  </AccordionDetails>
                  <AccordionDetails>
                    <p>1. {item.feature1}</p>
                  </AccordionDetails>
                  <AccordionDetails>
                    <p>2. {item.feature2}</p>
                  </AccordionDetails>
                  <AccordionDetails>
                    <p>3. {item.feature3}</p>
                  </AccordionDetails>
                  <AccordionDetails>
                    <h3>Technology Used</h3>
                  </AccordionDetails>
                  <AccordionDetails>
                    <p>{item.technology}</p>
                  </AccordionDetails>
                  <AccordionDetails>
                    <a href={item.repo} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon
                        className="project-icon"
                        icon={faGithub}
                      />
                    </a>
                    <a href={item.liveSite} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon
                        className="project-icon"
                        icon={faExternalLinkAlt}
                      />
                    </a>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Project;
