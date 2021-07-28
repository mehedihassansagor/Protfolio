import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import "./Banner.css";
import bannerImg from "../../../images/sagor-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import myFile from "../../../images/sagors resume.pdf";
import { Button } from "@material-ui/core";

const Banner = () => {
  return (
    <Container maxWidth="lg" className="banner" id="about">
      <Grid container className="grid-container">
        <Box clone order={{ xs: 2, sm: 2, md: 1 }}>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <div className="banner-grid-left">
              <h3 className="banner-title animate__animated animate__fadeInDown animate__delay-1s">
                Hello! I'm{" "}
              </h3>
              <p className="banner-name animate__animated animate__fadeInDown animate__delay-2s">
                Mehedi Hassan Sagor
              </p>
              <p className="banner-text animate__animated animate__fadeInDown animate__delay-3s">
                Frontend web developer
              </p>
              <p className="banner-text animate__animated animate__fadeInDown animate__delay-4s">
                A self motivated web developer. I have a deep interest in
                Javascript. I developed web applications. My core skills is
                based on Javascript and I love to solve problems using
                Javascript.
              </p>
              <Button variant="outlined">
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href={myFile}
                  download="sagors resume.pdf"
                >
                  Get Resume <FontAwesomeIcon icon={faDownload} />
                </a>
              </Button>
            </div>
          </Grid>
        </Box>
        <Box clone order={{ xs: 1, sm: 1, md: 2 }}>
          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            xs={12}
            className="banner-grid-right"
          >
            <img src={bannerImg} alt="bannerImg" />
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
};

export default Banner;
