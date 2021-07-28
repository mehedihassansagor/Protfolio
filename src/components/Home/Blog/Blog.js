import React, { useEffect, useState } from "react";
import "./Blog.css";
import { Container, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

import medium from "../../../images/medium.png";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mehedihassansagor1641998`
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data.items.slice(0, 3)));
  }, []);
  console.log(blogs);
  return (
    <section className="blog-section" id="blogs">
      <Container maxWidth="lg">
        <h2 className="text-center">My Recent Blogs</h2>
        <Grid container>
          {blogs &&
            blogs.map((blog, index) => (
              <Grid item lg={4} md={4} sm={6} xs={12} key={index}>
                <div className="blog-container">
                  <img src={medium} alt={blog.title} />
                  <h4>{blog.title}</h4>
                  <p>{blog.subtitle}</p>
                  <a href={blog.link} target="_blank" rel="noreferrer">
                    View More <FontAwesomeIcon icon={faAngleDoubleRight} />
                  </a>
                </div>
              </Grid>
            ))}
        </Grid>
        <div className="all-blogs-btn-container">
          <a
            href="https://mehedihassansagor1641998.medium.com/"
            target="_blank"
            rel="noreferrer"
            className="all-blog-button"
          >
            View All Blogs
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
