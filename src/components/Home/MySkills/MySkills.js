import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./MySkills.css";

const allSkill = [
  { name: "React Js", width: 75, type: "web" },
  { name: "Express Js", width: 70, type: "web" },
  { name: "Node Js", width: 70, type: "web" },
  { name: "MongoDB", width: 80, type: "web" },
  { name: "Material UI", width: 60, type: "web" },
  { name: "Bootstrap", width: 95, type: "web" },
  { name: "Javascript", width: 70, type: "programming" },
  { name: "c", width: 60, type: "programming" },
  { name: "Redux", width: 50, type: "others" },
  { name: "React Native", width: 30, type: "others" },
  { name: "Git", width: 70, type: "tools" },
//   { name: "PhotoShop", width: 75, type: "tools" },
  { name: "Firebase", width: 75, type: "tools" },
  { name: "Netlify", width: 80, type: "tools" },
  { name: "Heroku", width: 85, type: "tools" },
//   { name: "SCSS", width: 75, type: "web" },
];

const active = { backgroundColor: "rgb(59, 61, 73)", border: "1px solid #fff" };

const MySkills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const selectSkill = allSkill.filter((skill) => {
      return skill.type === "web";
    });
    setSkills(selectSkill);
  }, []);

  const changeShowSkills = (type) => {
    const selectSkill = allSkill.filter((skill) => skill.type === type);
    setSkills(selectSkill);
  };
  return (
    <section className="skill-section" id="skills">
      <Container>
        <h2 className="text-center">My Skills</h2>
        <div className="button-container">
          <NavLink
            activeStyle={active}
            exact
            to="/"
            className="skills-button"
            onClick={() => changeShowSkills("web")}
          >
            Web
          </NavLink>
          <NavLink
            activeStyle={active}
            to="/programming"
            className="skills-button"
            onClick={() => changeShowSkills("programming")}
          >
            Programming
          </NavLink>
          <NavLink
            activeStyle={active}
            to="/others"
            className="skills-button"
            onClick={() => changeShowSkills("others")}
          >
            Others
          </NavLink>
          <NavLink
            activeStyle={active}
            to="/tools"
            className="skills-button"
            onClick={() => changeShowSkills("tools")}
          >
            Tools
          </NavLink>
        </div>
        <Grid container>
          {skills.map((skill) => (
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="skill">
                <h2>{skill.name}</h2>
                <p>{skill.width}%</p>
                <span
                  className="progress"
                  style={{ width: `${skill.width}%` }}
                ></span>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default MySkills;
